import React, { useState, useEffect } from 'react';
//import * as Yup from 'yup';
import { useFormik } from 'formik';
import Addressmodal from '../../Components/Modals/Addressmodal';

import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import { deleteAddress, getAddresses, addAddress, editAddress } from './apiCalls';
//import { buildQueries } from '@testing-library/react';
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  contactNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter a valid mobile number (10 digits)',
      excludeEmptyString: false
    })
    .min(10)
    .max(10)
    .required('Contact Number is required'),
  contactName: Yup.string().required('Required'),
  address: Yup.string().required('Required')
});

export const YupError = styled.div`
  margin-top: 3px;
  color: rgb(255, 87, 34);
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: rgb(236, 67, 111);
  color: white;
  margin-bottom: 4vh;
  border: 0;
  border-radius: 5px;
  padding: 10px;
`;

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
text-align: center;
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

const Addressform = props => {
  const { width } = useWindowDimensions();
  const { token, user } = isAutheticated();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    let mounted = true;

    const { token, user } = isAutheticated();
    const loadData = async () => {
      getAddresses(user._id, token)
        .then(data => setData(data))
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

  const deleteHandler = index => {
    deleteAddress(user._id, token, data, index)
      .then(data => setData(data))
      .catch(err => console.log(err));
  };

  const editHandler = index => {
    setShow(true);
    setEditIndex(index);
  };

  const onSubmit = async ({ contactName, contactNumber, address }) => {
    if (editIndex === -1) {
      setData([...data, { contactName, contactNumber, address }]);
      console.log([...data, { contactName, contactNumber, address }]);
      addAddress(user._id, token, [...data, { contactName, contactNumber, address }])
        .then(data => setData(data))
        .catch(err => console.log(err));
    } else {
      editAddress(user._id, token, data, { contactName, contactNumber, address }, editIndex)
        .then(data => setData(data))
        .catch(err => console.log(err));

      setEditIndex(-1);
    }
    setShow(false);
  };

  const generateInitialValues = () => {
    return editIndex === -1
      ? {
          contactName: name,
          contactNumber: phoneNumber,
          address: ''
        }
      : data[editIndex];
  };

  const { name, phoneNumber } = user;
  console.log(phoneNumber);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: generateInitialValues(),
    validationSchema,
    onSubmit
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
          <TextField value={formik.values.contactName || ''} onChange={formik.handleChange} style={{ marginTop: '2vh' }} label="Full Name" fullWidth={true} id="contactName" variant="outlined" placeholder="Full Name" />
          <YupError>{formik.touched.contactName ? formik.errors.contactName : null}</YupError>
          <TextField
            InputProps={{ startAdornment: <InputAdornment position="start">+ 91 | </InputAdornment> }}
            inputProps={{
              maxLength: 10
            }}
            style={{ marginTop: '4vh' }}
            label="Mobile Number"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            fullWidth={true}
            id="contactNumber"
            variant="outlined"
            placeholder="Mobile Number"
          />
          <YupError>{formik.touched.contactNumber ? formik.errors.contactNumber : null}</YupError>
          <TextField style={{ marginTop: '4vh' }} label="Address" value={formik.values.address} onChange={formik.handleChange} fullWidth={true} id="address" variant="outlined" placeholder="Address" />
          <YupError style={{ marginBottom: '4vh' }}>{formik.touched.address ? formik.errors.address : null}</YupError>
          <Button type="button" onClick={formik.handleSubmit}>
            Save
          </Button>
        </form>
      </Addressmodal>
      <div style={{ width: '100%', fontSize: '14px' }}>
        {width >= 780 && (
          <Header>
            <div style={{ fontSize: '18px', fontWeight: '800', marginTop: '1vh' }}>Saved Addresses</div>
            <AddAddressButton onClick={() => setShow(true)}>
              <div>+ Add new address</div>
            </AddAddressButton>
          </Header>
        )}

        {width < 780 && (
          <HeaderMobile onClick={() => setShow(true)}>
            <div>+ Add new address</div>
          </HeaderMobile>
        )}

        {data.map(({ contactName, contactNumber, address }, index) => {
          return (
            <CardContainer key={index}>
              <AddressCard>
                <div style={{ fontWeight: '800', marginBottom: '2vh' }}>{contactName}</div>
                <div>{address}</div>
                <div style={{ marginBottom: '2vh' }}>Aurangabad</div>
                <div>Mobile: {contactNumber}</div>
              </AddressCard>
              <RemoveEditButton>
                <ButtonText
                  onClick={() => {
                    editHandler(index);
                  }}
                >
                  Edit
                </ButtonText>
                <div
                  style={{
                    width: '1px',
                    backgroundColor: '#eaeaec',
                    height: '41px',
                    marginTop: '5px'
                  }}
                ></div>
                <ButtonText onClick={() => deleteHandler(index)}>Remove</ButtonText>
              </RemoveEditButton>
            </CardContainer>
          );
        })}
      </div>
    </>
  );
};

export default Addressform;
