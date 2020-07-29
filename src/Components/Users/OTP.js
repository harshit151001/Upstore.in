import React, { useContext, useState } from 'react';
import { dispatchContext } from '../../Statemanagement/Statecontext';
import { OTPVerify, authenticate } from '../../auth/helper/index';

const VerifyOTP = props => {
  const dispatchLogin = useContext(dispatchContext);

  const { phoneNumber, session_id } = props.location.state;

  const [values, setValues] = useState({
    OTP: '',
    error: '',
    loading: false,
    didRedirect: false
  });

  const { OTP, error, loading } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    OTPVerify({ phoneNumber, session_id, OTP })
      .then(data => {
        console.log(data);

        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            dispatchLogin({ type: 'login' });
          });
        }

        return props.history.push({
          pathname: '/'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {loadingMessage()}
      {errorMessage()}
      <form>
        <div className="form-group">
          <label htmlFor="OTP"></label>

          <input type="text" className="form-control" aria-describedby="emailHelp" value={OTP} onChange={handleChange('OTP')} placeholder="OTP*" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Keep me signed in
          </label>
        </div>
        <button onClick={onSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>{JSON.stringify(values)}</p>
    </>
  );
};

export default VerifyOTP;
