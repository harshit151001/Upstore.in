import React, { useState, useEffect } from 'react';
import { DetailsCard, DetailsCardWrapper, HeaderDiv } from './Userdetailsform';
import { withRouter } from 'react-router-dom';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import CorrectSvg from '../Images/correct.svg';
import TextField from '@material-ui/core/TextField';

// const validationSchema = Yup.object({
//   phoneNumber: Yup.string()
//     .matches(/^[6-9]\d{9}$/, {
//       message: 'Please enter a valid mobile number (10 digits)',
//       excludeEmptyString: false
//     })
//     .max(10)
// });

const MobileNumberDiv = styled.div`
  width: 100%;
  margin-top: 4vh;
  margin-bottom: 4vh;
  padding: 12px;
  background-color: rgba(3, 166, 133, 0.15);
  border: solid 1px rgba(3, 166, 133, 0.15);
`;
const EditDetails = props => {
  const { token, user } = isAutheticated();

  const [values, setValues] = useState({
    name: '',
    email: '',

    phoneNumber: ''
  });

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      fetch(`${API}/api/user/${user._id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          response.json().then(function (data) {
            console.log(data);
            const { name, phoneNumber, email } = data;
            setValues(values => {
              return {
                ...values,
                name,
                email,
                phoneNumber
              };
            });
          });
        })
        .catch(err => console.log(err));

      if (mounted) {
        window.scroll(0, 0);
      }
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  const onSubmit = async ({ name, email }) => {
    console.log(JSON.stringify({ name, email }));
    fetch(`${API}/api/user/${user._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(response => {
        response.json().then(function (data) {
          console.log(data);
          props.history.push('/userdashboard/details');
        });
      })
      .catch(err => console.log(err));
  };

  //eslint-disable-next-line
  const { name, email, phoneNumber } = values;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name,
      email
    },
    // validationSchema,
    onSubmit
  });
  console.log(formik.values.email);

  return (
    <DetailsCardWrapper>
      <DetailsCard style={{ width: '80%', margin: 'auto' }}>
        <HeaderDiv>Edit Profile</HeaderDiv>
        <MobileNumberDiv>
          <div style={{ fontSize: '12px', color: 'rgba(39, 43, 65, 0.7)' }}>Mobile Number*</div>
          <div style={{ fontSize: '14px' }}>
            {phoneNumber}
            <img style={{ width: 'auto', height: '18px' }} src={CorrectSvg} alt="Verified Icon" />
          </div>
        </MobileNumberDiv>
        <form>
          <TextField value={formik.values.name} onChange={formik.handleChange} style={{ marginTop: '2vh' }} label="Full Name" fullWidth={true} id="name" variant="outlined" placeholder="Full Name" />
          <TextField style={{ marginTop: '4vh', marginBottom: '4vh' }} label="Email" value={formik.values.email} onChange={formik.handleChange} fullWidth={true} id="email" variant="outlined" placeholder="Email" />

          <Button
            fullWidth={true}
            onClick={() => {
              formik.handleSubmit();
            }}
            style={{ backgroundColor: '#ec436f', color: 'white', marginBottom: '4vh' }}
            className="btn btn-primary"
          >
            Save Details
          </Button>
        </form>
      </DetailsCard>
    </DetailsCardWrapper>
  );
};
export default withRouter(EditDetails);
