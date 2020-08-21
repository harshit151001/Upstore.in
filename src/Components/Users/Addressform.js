import React, { useState, useEffect } from 'react';
//import * as Yup from 'yup';
import { useFormik } from 'formik';
import Addressmodal from '../../Components/Modals/Addressmodal';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useWindowDimensions from '../../customapis/useWindowDimensions';
//import { buildQueries } from '@testing-library/react';

const ButtonText = styled.div`
  cursor: pointer;
  width: 50%;
  text-transform: uppercase;
  padding: 14px 14px;
  text-align: center;
  font-weight: 800;
`;

const RemoveEditButton = styled.div`
  display: flex;
  color: #526cd0;
  border-top: 1px solid #eaeaec;
`;

const CardContainer = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 12px;
  width: 100%;
`;

const AddressCard = styled.div`
  padding: 12px;
  width: 100%;
  color: #696e79;
`;

const Header = styled.div`
  margin-bottom: 4vh;
  height: max-content;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeaderMobile = styled.div`
box-shadow: 0px 1px 3px rgba(40, 44, 63, 0.3);
    background-color: white;
    padding: 17px 10px;
    margin-bottom: 10px;
    color: #696E79;
    font-weight: 800;
    text-transform: uppercase;
    color: #526cd0;
    font-size: 14px;
}
`;

const AddAddressButton = styled.div`
  font-size: 14px;
  border: 0.5px solid #d4d5d9;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 800;
  color: #526cd0;
  padding: 12px;
  text-align: center;
  width: 180px;
  height: 43px;
  cursor: pointer;
`;

const Addressform = (props) => {
  const { width } = useWindowDimensions();
  const { token, user } = isAutheticated();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

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
            console.log(data);
            const {
              addresses,
              // eslint-disable-next-line
              contactName: { name, phoneNumber },
            } = data;

            setData(addresses);
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

  const deleteHandler = (index) => {
    let newAddressArray = data;
    newAddressArray.splice(index, 1);

    fetch(`${API}/api/user/${user._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ addresses: newAddressArray }),
    })
      .then((response) => {
        response.json().then(function (data) {
          console.log(data);
          setData(data.addresses);
        });
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = async ({ contactName, contactNumber, address }) => {
    setData([...data, { contactName, contactNumber, address }]);
    const newAddressArray = [...data, { contactName, contactNumber, address }];
    fetch(`${API}/api/user/${user._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        addresses: newAddressArray,
      }),
    })
      .then((response) => {
        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch((err) => console.log(err));
  };

  const { name, phoneNumber } = user;
  console.log(phoneNumber);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contactName: name,
      contactNumber: phoneNumber,
      address: '',
    },
    // validationSchema,
    onSubmit,
  });

  return (
    <>
      <Addressmodal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <form>
          <TextField
            value={formik.values.contactName || ''}
            onChange={formik.handleChange}
            style={{ marginTop: '2vh' }}
            label="Full Name"
            fullWidth={true}
            id="contactName"
            variant="outlined"
            placeholder="Full Name"
          />
          <TextField
            style={{ marginTop: '4vh' }}
            label="Mobile Number"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            fullWidth={true}
            id="contactNumber"
            variant="outlined"
            placeholder="Mobile Number"
          />
          <TextField
            style={{ marginTop: '4vh', marginBottom: '4vh' }}
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            fullWidth={true}
            id="address"
            variant="outlined"
            placeholder="Address"
          />

          <Button
            fullWidth={true}
            onClick={() => {
              formik.handleSubmit();
              setShow(false);
            }}
            style={{
              backgroundColor: '#ec436f',
              color: 'white',
              marginBottom: '4vh',
            }}
            className="btn btn-primary"
          >
            Save
          </Button>
        </form>
      </Addressmodal>
      <div style={{ width: '100%', fontSize: '14px' }}>
        {width >= 780 && (
          <Header>
            <div
              style={{ fontSize: '18px', fontWeight: '800', marginTop: '1vh' }}
            >
              Saved Addresses
            </div>
            <AddAddressButton onClick={() => setShow(true)}>
              <div>+ Add new address</div>
            </AddAddressButton>
          </Header>
        )}

        {width < 780 && (
          <HeaderMobile>
            <div>+ Add new address</div>
          </HeaderMobile>
        )}

        {data.map(({ contactName, contactNumber, address }, index) => {
          return (
            <CardContainer key={index}>
              <AddressCard>
                <div style={{ fontWeight: '800', marginBottom: '2vh' }}>
                  {contactName}
                </div>
                <div>{address}</div>
                <div style={{ marginBottom: '2vh' }}>Aurangabad</div>
                <div>Mobile: {contactNumber}</div>
              </AddressCard>
              <RemoveEditButton>
                <ButtonText>Edit</ButtonText>
                <div
                  style={{
                    width: '1px',
                    backgroundColor: '#eaeaec',
                    height: '41px',
                    marginTop: '5px',
                  }}
                ></div>
                <ButtonText onClick={() => deleteHandler(index)}>
                  Remove
                </ButtonText>
              </RemoveEditButton>
            </CardContainer>
          );
        })}
      </div>
    </>
  );
};

export default Addressform;
