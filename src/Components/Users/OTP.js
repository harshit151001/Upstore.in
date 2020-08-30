import React, { useContext } from 'react';
import { dispatchContext } from '../../Statemanagement/Statecontext';
import { OTPVerify, authenticate } from '../../auth/helper/index';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Formwrapper, Wrapper } from './Loginsignupform';
import verified from '../Images/verified.svg';

const validationSchema = Yup.object({
  OTP: Yup.string().required('OTP is a required field').min(6, 'OTP must be 6 digits long')
});

const VerifyOTP = props => {
  const dispatchLogin = useContext(dispatchContext);

  const formik = useFormik({
    initialValues: {
      OTP: ''
    },
    validationSchema,
    onSubmit: ({ OTP }) => {
      if (props.location.state) {
        const { phoneNumber, session_id } = props.location.state;
        OTPVerify({ phoneNumber, session_id, OTP })
          .then(data => {
            if (data.error) {
              formik.setErrors({ OTP: 'Incorrect OTP' });
            } else {
              authenticate(data, () => {
                dispatchLogin({ type: 'login' });
              });

              return props.history.push({
                pathname: '/'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  });

  return (
    <>
      <Wrapper>
        <Formwrapper style={{ padding: '2vh' }}>
          <div style={{ textAlign: 'center', marginTop: '4vh' }}>
            <img src={verified} style={{ height: '22vh' }} alt="Verified Phone SVG" />
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="OTP"></label>

              <input style={{ marginTop: '3vh', marginBottom: '1rem' }} type="text" maxLength={6} className="form-control" aria-describedby="emailHelp" id="OTP" value={formik.values.OTP} onChange={formik.handleChange} placeholder="OTP*" />
              <p style={{ color: '#FF5722', fontSize: '14px' }}>{formik.touched.OTP ? formik.errors.OTP : null}</p>
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
        </Formwrapper>
      </Wrapper>
    </>
  );
};

export default VerifyOTP;
