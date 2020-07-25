import API from '../../backend';

export const signup = async (user) => {
  try {
    const response = await fetch(`${API}/api/signupEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const signin = async (user) => {
  try {
    const response = await fetch(`${API}/api/signinEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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

export const signout = async (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('Upstorejwt');
    next();

    try {
      const response = await fetch(`${API}/signout`, {
        method: 'GET',
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
