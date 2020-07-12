<<<<<<< HEAD
import React from 'react';

const Loginwithemail = () => {
  return <>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
=======
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../../auth/helper/index";



const Loginwithemail = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
      });
    
      const { email, password, error, loading, didRedirect } = values;
      const { user } = isAutheticated();
    
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
              });
            }
          })
          .catch(console.log("signin request failed"));
      };
    
      const performRedirect = () => {
        //TODO: do a redirect here
        if (isAutheticated()) {
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
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };
    

  return <>
  {loadingMessage()}
      {errorMessage()}
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={handleChange("email")} value={email}/>
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
<<<<<<< HEAD
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
=======
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={handleChange("password")} value={password}/>
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
  </div>
<<<<<<< HEAD
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
=======
  <button onClick={onSubmit} type="submit" class="btn btn-primary">Submit</button>
</form>
{performRedirect()}
<p>{JSON.stringify(values)}</p>
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
</>;
};

export default Loginwithemail;
