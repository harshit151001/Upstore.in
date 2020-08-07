import React, { useContext } from 'react';
import './Razor.css';
import { isAutheticated } from '../../auth/helper/index';
import API from '../../backend';
import { appContext } from '../../Statemanagement/Statecontext';

function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === 'localhost';

function Razor(props) {
  const { state } = useContext(appContext);
  const { user, token } = isAutheticated();
  const { cart } = state;
  console.log(cart);
  console.log(props.amount);
  const name = user.name || '';

  async function displayRazorpay() {
    console.log(token);
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

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
    order = { ...order, transaction_id, amount, address: props.data, status: 'Processing', user: isAutheticated().user._id };

    console.log(order);

    if (cart.length) {
      const data = await fetch(`${API}/api/razorpay/${user._id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          order
        })
      }).then(t => t.json());

      const options = {
        key: 'rzp_test_pKFrggt8le9TQx',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'Payment',
        description: 'Thank you for choosing Up Store',
        // image: 'http://localhost:1337/logo.svg',
        handler: function (response) {
          console.log(response);
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);

          fetch(`${API}/api/clear/cart/${user._id}`, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }).then(response => response.json().then(res => console.log(res)));

          fetch(`${API}/api/order/${data.orderId}/status/${user._id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              status: 'Received'
            })
          }).then(response => response.json().then(res => console.log(res)));
        },
        prefill: {
          name,
          email: isAutheticated().user.email || '',
          phone_number: isAutheticated().user.phoneNumber
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }

  return (
    <button type="button" onClick={displayRazorpay} className="btn btn-danger btn mt-3 btn-block" target="_blank" rel="noopener noreferrer">
      <strong>Pay Online</strong>
    </button>
  );
}

export default Razor;
