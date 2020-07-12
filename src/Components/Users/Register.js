import React from 'react';
import { signup } from '../../auth/helper/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true,
          });
        }
      })
      .catch(console.log('Error in signup'));
  };

  const signUpForm = () => {
    return (
      <form>
        <div class="form-group">
          <label for="exampleInputName1">Name</label>
          <input
            class="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={handleChange('name')}
            type="text"
            value={name}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange('email')}
            value={email}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleChange('password')}
            value={password}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Keep me signed in
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? '' : 'none' }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? '' : 'none' }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    // <Base title="Sign up page" description="A page for user to sign up!">
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p>{JSON.stringify(values)}</p>
    </div>
    // </Base>
  );
};

export default Register;
