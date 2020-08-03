import React, { useState } from 'react';
import './Razor.css';
import { isAutheticated } from '../../auth/helper/index';

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

function Razor() {
  const [name, setName] = useState(isAutheticated().user.name || '');

  async function displayRazorpay() {
    console.log(isAutheticated().token);
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch('http://localhost:8000/api/razorpay', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${isAutheticated().token}`
      }
    }).then(t => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? 'rzp_test_pKFrggt8le9TQx' : 'PRODUCTION_KEY',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Donation',
      description: 'Thank you for nothing. Please give us some money',
      // image: 'http://localhost:1337/logo.svg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        phone_number: isAutheticated().user.phoneNumber
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <a className="Razor-link" onClick={displayRazorpay} target="_blank" rel="noopener noreferrer">
      <button>pay online</button>
    </a>
  );
}

export default Razor;
