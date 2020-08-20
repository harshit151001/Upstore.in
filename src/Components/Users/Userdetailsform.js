import React, { useState, useEffect } from 'react';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const DetailsCardWrapper = styled.div`
  @media (min-width: 780px) {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  }

  width: 100%;
`;

const TableItem = styled.div`
  width: 50%;
  margin: 10px 0;
`;

const DetailsTable = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  width: 65%;
  flex-wrap: wrap;
`;

export const HeaderDiv = styled.div`
  color: #696b79;
  font-weight: 400;
  font-size: 22px;
  border-bottom: 1px solid #eaeaec;
  padding-bottom: 15px;
`;

export const DetailsCard = styled.div`
  @media (min-width: 780px) {
    padding: 55px 40px 20px 40px;
  }
`;

const Userdetailsform = props => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  useEffect(() => {
    let mounted = true;

    const { token, user } = isAutheticated();
    const loadData = async () => {
      fetch(`${API}/api/user/${user._id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response);
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

  //eslint-disable-next-line
  const { name, email, password, phoneNumber, error, loading } = values;
  console.log(name);
  return (
    <>
      <DetailsCardWrapper>
        <DetailsCard>
          <HeaderDiv>Profile Details</HeaderDiv>
          <DetailsTable>
            <TableItem>Mobile</TableItem>
            <TableItem>{phoneNumber}</TableItem>
            <TableItem>Full Name</TableItem>
            <TableItem>{name || <>-not added-</>}</TableItem>
            <TableItem>Email</TableItem>
            <TableItem>{email || <>-not added-</>}</TableItem>
          </DetailsTable>
          <Link to="/userdashboard/details/edit">
            <Button variant="contained" style={{ backgroundColor: '#ec436f', color: 'white', width: '200px', marginBottom: '4vh', height: '6vh', fontWeight: '800' }}>
              Edit
            </Button>
          </Link>
        </DetailsCard>
      </DetailsCardWrapper>
    </>
  );
};

export default Userdetailsform;
