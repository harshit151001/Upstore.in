import React, { useEffect, useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Invoice from '../Cart/Invoice';
import { useFormik } from 'formik';
import { appContext } from '../../Statemanagement/Statecontext';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
//?import Razor from './Razor';
import { addAddress, getAddresses } from '../Users/apiCalls';
import { validationSchema, YupError } from '../Users/Addressform';
import { Button } from '../Users/Addressform';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';

const FormHeader = styled.div`
  font-weight: 900;
  font-size: 23px;
  color: #212529;
  margin-bottom: 6vh;
  margin-top: 2vh;
`;

const SelectAddress = props => {
  const { width } = useWindowDimensions();
  const { user, token } = isAutheticated();
  const { state } = useContext(appContext);
  let status = 'Processing';
  const { cart } = state;
  const [data, setData] = useState('loading');

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 191,
      boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
      border: 'none'
    },
    name: {
      fontSize: 20,
      display: 'inline',
      color: '#282c3f'
    },
    pos: {
      marginBottom: 12
    }
  });

  const onSubmit = async ({ contactName, contactNumber, address }) => {
    setData([{ contactName, contactNumber, address }]);
    const response = await addAddress(user._id, token, [{ contactName, contactNumber, address }]);

    setData(response[0]);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contactName: user.name,
      contactNumber: user.phoneNumber,
      address: ''
    },
    validationSchema,
    onSubmit
  });

  const classes = useStyles();

  useEffect(() => {
    const { user, token } = isAutheticated();

    try {
      getAddresses(user._id, token).then(data => {
        const defaultAddress = data.filter(address => address.default === true)[0] || data[0];

        setData(defaultAddress);
      });
    } catch (err) {
      return console.log(err);
    }

    window.scroll(0, 0);
  }, []);

  const placeOrder = () => {
    let order = {};

    let transaction_id = new Date().toISOString();

    let amount = 0;
    order.products = [];
    cart.map(document => {
      amount += document.product.price * document.quantity;
      order.products.push({
        shopId: document.product.shopId,
        product: document.product._id,
        name: document.product.name,
        price: document.product.price,
        quantity: document.quantity
      });

      return amount;
    });
    order = {
      ...order,
      transaction_id,
      amount,
      address: data,
      status,
      user: isAutheticated().user._id
    };

    fetch(`${API}/api/order/create/${user._id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ order })
    })
      .then(response => {
        response.json().then(function (data) {
          props.history.push({
            pathname: '/userdashboard/orders',
            state: { confirmation: 'You order has been placed successfully!' }
          });
        });
      })
      .catch(err => console.log(err));

    fetch(`${API}/api/clear/cart/${user._id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.json().then(res => console.log(res)));

    return order;
  };

  const addAddressForm = () => {
    return (
      <form>
        <TextField value={formik.values.contactName || ''} onChange={formik.handleChange} style={{ marginTop: '2vh' }} label="Full Name" fullWidth={true} id="contactName" variant="outlined" placeholder="Full Name" />
        <YupError>{formik.touched.contactName ? formik.errors.contactName : null}</YupError>
        <TextField
          InputProps={{
            startAdornment: <InputAdornment position="start">+ 91 | </InputAdornment>
          }}
          inputProps={{
            maxLength: 10
          }}
          style={{ marginTop: '8vh' }}
          label="Mobile Number"
          value={formik.values.contactNumber}
          onChange={formik.handleChange}
          fullWidth={true}
          id="contactNumber"
          variant="outlined"
          placeholder="Mobile Number"
        />
        <YupError>{formik.touched.contactNumber ? formik.errors.contactNumber : null}</YupError>
        <TextField style={{ marginTop: '8vh' }} label="Address" value={formik.values.address} onChange={formik.handleChange} fullWidth={true} id="address" variant="outlined" placeholder="Address" />
        <YupError>{formik.touched.address ? formik.errors.address : null}</YupError>
      </form>
    );
  };

  return (
    <div className="container-fluid" style={{ background: '#fafafa', minHeight: '91vh' }}>
      <div className="container-xl pt-4 pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="row mt-0 mb-1">
              <div className="col-12">
                <div
                  className="card d-none d-sm-block"
                  style={{
                    boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
                    border: 'none'
                  }}
                >
                  <div className="card-body">
                    <div className="row w-100 py-auto my-auto">
                      <div className="col-8 my-auto">
                        <strong>My shopping bag:{`(${cart.length} items)`}</strong>
                      </div>
                      <div className="col-4  my-auto text-right">
                        {
                          <strong>
                            &#x20b9;
                            {cart.map(items => items.product.price).reduce((prev, current) => prev + current, 0)}
                          </strong>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div style={{ marginTop: '1rem' }} className="col-lg-9">
            {data === 'loading' && <div>Loading...</div>}
            {data === undefined ? (
              <>
                <div
                  style={{
                    boxShadow: `${width > 991 ? `0px 0px 4px 1px rgba(97,97,97,0.24)` : ''}`,
                    border: 'none',
                    padding: `${width > 991 ? `1.25rem` : ''}`,
                    borderRadius: '5px'
                  }}
                >
                  <FormHeader>Address</FormHeader>
                  {addAddressForm()}
                  {width > 991 && (
                    <div style={{ marginTop: '8vh' }}>
                      <Button
                        type="button"
                        onClick={() => {
                          formik.handleSubmit();
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  )}
                </div>
                {width <= 991 && (
                  <div
                    style={{
                      position: 'fixed',
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      padding: '31px 10px',
                      boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)'
                    }}
                  >
                    <Button
                      style={{ marginBottom: '0', padding: '15px' }}
                      type="button"
                      onClick={() => {
                        formik.handleSubmit();
                      }}
                    >
                      Add Address
                    </Button>
                  </div>
                )}
              </>
            ) : (
              data !== 'loading' && (
                <Card className={classes.root}>
                  <CardContent>
                    <Radio checked={true} className="pt-0" name="radio-button-demo" />
                    <Typography className={classes.name} gutterBottom>
                      {data.contactName}
                    </Typography>
                    <div style={{ marginLeft: '5vh' }}>
                      <Typography variant="body2" component="p">
                        {data.address}
                      </Typography>
                      <Typography component="p">Mobile: {data.contactNumber}</Typography>
                    </div>
                    <Link to={'/checkout/address'} style={{ textDecoration: 'none' }}>
                      <button type="button" className="btn btn-outline-primary   mt-3 btn-block">
                        <strong>Choose a different address</strong>
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              )
            )}
          </div>
          {data !== 'loading' && (
            <div className="col-lg-3">
              {' '}
              {(width > 990 || data) && <Invoice display={'none'} link={'/checkout'} />}
              {!data ? (
                ''
              ) : (
                <div>
                  <button
                    onClick={() => {
                      status = 'Recieved';
                      placeOrder();
                    }}
                    type="button"
                    className="btn btn-danger btn mt-3 btn-block"
                  >
                    <strong>Pay on Delivery</strong>
                  </button>
                  {/* <Razor address={data} /> */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SelectAddress);
