import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Invoice from '../Cart/Invoice';
import { appContext } from '../../Statemanagement/Statecontext';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Razor from './Razor';

const SelectAddress = () => {
  const { user, token } = isAutheticated();
  const { state } = useContext(appContext);
  let status = 'Processing';
  const { cart } = state;
  const [data, setData] = useState([]);

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 191,
      boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
      border: 'none',
      marginTop: '1rem'
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

  const classes = useStyles();

  useEffect(() => {
    let mounted = true;
    window.scroll(0, 0);
    const loadData = async () => {
      try {
        const response = await fetch(`${API}/api/user/${user._id}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        response.json().then(response => {
          const defaultAddress = response.addresses.filter(address => address.default === true)[0];
          setData(defaultAddress);
        });
      } catch (err) {
        return console.log(err);
      }
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  const totalAmount = () => {
    let amount;
    cart.map(document => {
      amount += document.product.price;
    });
    return amount;
  };

  const placeOrder = () => {
    let order = {};

    let transaction_id = new Date().toISOString();

    let amount = 0;
    order.products = [];
    cart.map(document => {
      amount += document.product.price;
      order.products.push({
        product: document.product._id,
        name: document.product.name,
        price: document.product.price,
        quantity: document.quantity
      });
    });
    order = { ...order, transaction_id, amount, address: data, status, user: isAutheticated().user._id };

    console.log(order);

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
          console.log(data);
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
          <div className="col-lg-9">
            {!data ? (
              <>
                <h1>No Addresses</h1>
                <Link to={'/checkout/address'} style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-outline-primary  btn mt-3 btn-block">
                    <strong>Choose a different address</strong>
                  </button>
                </Link>
              </>
            ) : (
              <Card className={classes.root}>
                <CardContent>
                  <Radio checked={true} className="pt-0" name="radio-button-demo" />
                  <Typography className={classes.name} gutterBottom>
                    {data.contactName}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {data.address}
                  </Typography>
                  <Typography component="p">Mobile: {data.contactNumber}</Typography>
                  <Link to={'/checkout/address'} style={{ textDecoration: 'none' }}>
                    <button type="button" className="btn btn-outline-primary   mt-3 btn-block">
                      <strong>Choose a different address</strong>
                    </button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="col-lg-3">
            {' '}
            <Invoice display={'none'} link={'/checkout'} />{' '}
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
            <Razor address={data} amount={totalAmount()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
