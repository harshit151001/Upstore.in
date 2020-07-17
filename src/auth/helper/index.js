import API from '../../backend';
import axios from 'axios';

export const signup = user => {
  axios
    .post(`${API}/api/signupEmail`, JSON.stringify(user))
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

// export const signup = async (user) => {
//   try {
//     const response = await fetch(`${API}/api/signupEmail`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });
//     return response.json();
//   } catch (err) {
//     return console.log(err);
//   }
// };

export const signin = async user => {
  try {
    const response = await fetch(`${API}/api/signinEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

// export const signin = user => {
//   return user =>
//     axios
//       .post(`${API}/api/signinEmail`, { body: JSON.stringify(user) })
//       .then(response => console.log(response))
//       .catch(error => console.log(error));
// };

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const signout = async next => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();

    try {
      const response = await fetch(`${API}/signout`, {
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
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};
