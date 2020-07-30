import React, { useState, useEffect } from 'react';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 70%;
   
    

    @media  (min-width: 990px) {

      margin-left: 250px;
     }
  
}
`;

const Userdetailsform = (props) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    error: '',
    loading: false,
    didRedirect: false,
  });

  useEffect(() => {
    let mounted = true;

    const { token, user } = isAutheticated();
    const loadData = async () => {
      fetch(`${API}/api/user/${user._id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          response.json().then(function (data) {
            const { name, phoneNumber, email } = data;
            setValues((values) => {
              return {
                ...values,
                name,
                email,
                phoneNumber,
                error: '',
                loading: false,
              };
            });
          });
        })
        .catch((err) => console.log(err));

      if (mounted) {
        window.scroll(0, 0);
      }
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  const { token, user } = isAutheticated();

  const onSubmit = async (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });
    fetch(`${API}/api/user/${user._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        phoneNumber,
        name,
        email,
        password,
      }),
    })
      .then((response) => {
        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch((err) => console.log(err));
  };
  //eslint-disable-next-line
  const { name, email, password, phoneNumber, error, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <>
      <Wrapper>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputMobileNumber1">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              readOnly={phoneNumber}
              id="exampleInputMobileNumber1"
              placeholder="Mobile Number"
              onChange={handleChange('phoneNumber')}
              value={phoneNumber}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputNmae">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={handleChange('name')}
              value={name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleChange('email')}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={handleChange('password')}
              value={password}
            />
          </div>
          <button
            onClick={onSubmit}
            type="submit"
            style={{ backgroundColor: '#111111', color: 'white' }}
            className="btn btn-primary"
          >
            Update
          </button>
        </form>
        <p>{JSON.stringify(values)}</p>
      </Wrapper>
    </>
  );
};

export default Userdetailsform;
