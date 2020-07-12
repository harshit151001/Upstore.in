import React from 'react';

const Loginwithphone = () => {
  return <><form>
  <div className="form-group">
    <label htmlFor="exampleInputNumber">Mobile Number</label>
    <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="eHelp" placeholder="Enter your phone number"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Keep me signed in</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form></>;
};

export default Loginwithphone;
