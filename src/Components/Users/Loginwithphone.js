import React from 'react';
import { withRouter } from 'react-router-dom';
import { postNumber } from '../../auth/helper/index';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { YupError } from './Addressform';

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter a valid mobile number (10 digits)',
      excludeEmptyString: false
    })
    .min(10)
    .max(10)
    .required('This is a required field')
});

const Loginwithphone = props => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: ''
    },
    validationSchema,
    onSubmit: ({ phoneNumber }) => {
      postNumber({ phoneNumber }).then(response => {
        const { session_id } = response;
        return props.history.push({
          pathname: '/OTP',
          state: { phoneNumber, session_id }
        });
      });
    }
  });

  return (
    <>
      <form>
        <div className="form-group">
          <TextField
            InputProps={{
              startAdornment: <InputAdornment position="start">+ 91 | </InputAdornment>
            }}
            label="Mobile Number"
            fullWidth={true}
            inputProps={{ maxLength: 10 }}
            id="phoneNumber"
            variant="outlined"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            placeholder="Mobile Number*"
          />
        </div>

        <YupError>{formik.errors.phoneNumber && formik.touched.phoneNumber ? formik.errors.phoneNumber : null}</YupError>

        <div>
          <button
            onClick={() => {
              formik.handleSubmit();
            }}
            style={{ marginTop: '2vh', width: '100%' }}
            type="button"
            className="btn btn-primary"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default withRouter(Loginwithphone);
