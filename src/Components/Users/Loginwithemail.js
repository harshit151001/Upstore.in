import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { appContext, dispatchContext } from '../../Statemanagement/Statecontext';
import { signin, authenticate } from '../../auth/helper/index';

const Loginwithemail = () => {
  const loginContext = useContext(appContext);
  const dispatchLogin = useContext(dispatchContext);
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
            dispatchLogin({ type: 'login' });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const performRedirect = () => {
    //TODO: do a redirect here
    console.log(loginContext.state.loggedIn);
    if (loginContext.state.loggedIn) {
      return <Redirect to="/" />;
    }
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
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange('email')} value={email} />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange('password')} value={password} />
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
      {performRedirect()}
      <p>{JSON.stringify(values)}</p>
    </>
  );
};

export default Loginwithemail;
