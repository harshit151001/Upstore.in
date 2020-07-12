import React from 'react';

const Loginwithphone = () => {
  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Mobile Number*"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Keep me signed in
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Loginwithphone;
