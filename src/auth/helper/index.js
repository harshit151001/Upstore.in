import API from '../../backend';

export const OTPVerify = async data => {
  try {
    const response = await fetch(`${API}/api/verifyOTP`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const postNumber = async phoneNumber => {
  try {
    const response = await fetch(`${API}/api/getNumber`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(phoneNumber)
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const authenticate = async (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('Upstorejwt', JSON.stringify(data));
    next();
  }
};

export const signout = async next => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('Upstorejwt');
    next();
    try {
      const response = await fetch(`${API}/api/signout`, {
        method: 'GET'
      });
      return console.log(response);
    } catch (err) {
      return console.log(err);
    }
  }
};

export const isAutheticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('Upstorejwt')) {
    return JSON.parse(localStorage.getItem('Upstorejwt'));
  } else {
    return false;
  }
};
