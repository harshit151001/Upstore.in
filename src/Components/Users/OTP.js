import React, { useContext } from 'react';
import { dispatchContext } from '../../Statemanagement/Statecontext';
import { OTPVerify, authenticate } from '../../auth/helper/index';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Formwrapper, Wrapper } from './Loginsignupform';
import verified from '../Images/verified.svg';

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter a valid mobile number (10 digits)',
      excludeEmptyString: false,
    })
    .max(10),
});

const VerifyOTP = (props) => {
  const dispatchLogin = useContext(dispatchContext);

  const formik = useFormik({
    initialValues: {
      OTP: '',
    },
    validationSchema,
    onSubmit: ({ OTP }) => {
      if (props.location.state) {
        const { phoneNumber, session_id } = props.location.state;
        OTPVerify({ phoneNumber, session_id, OTP })
          .then((data) => {
            console.log(data);

            authenticate(data, () => {
              dispatchLogin({ type: 'login' });
            });

            return props.history.push({
              pathname: '/',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  });

  return (
    <>
      <Wrapper>
        <Formwrapper style={{ padding: '2vh' }}>
          <div style={{ textAlign: 'center', marginTop: '4vh' }}>
            <img
              src={verified}
              style={{ height: '22vh' }}
              alt="Verified Phone SVG"
            />
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="OTP"></label>

              <input
                type="text"
                pattern="[0-9]+"
                maxLength={6}
                style={{ marginTop: '3vh' }}
                className="form-control"
                aria-describedby="emailHelp"
                id="OTP"
                value={formik.values.OTP}
                onChange={formik.handleChange}
                placeholder="OTP*"
              />
            </div>

            <button
              style={{ width: '100%', marginTop: '3vh' }}
              onClick={() => {
                formik.handleSubmit();
              }}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
          {/* <p>{JSON.stringify(formik.values)}</p> */}
        </Formwrapper>
      </Wrapper>
    </>
  );
};

export default VerifyOTP;
