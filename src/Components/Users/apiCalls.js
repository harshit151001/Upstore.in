import API from '../../backend';
import Axios from 'axios';

export const deleteAddress = (userId, token, addressArray, index) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  addressArray.splice(index, 1);

  return Axios.put(`${API}/api/user/${userId}`, { addresses: addressArray }, config).then(
    response => {
      return response.data.addresses;
    },
    error => {
      console.log(error);
    }
  );
};

export const getAddresses = (userId, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return Axios.get(`${API}/api/user/${userId}`, config).then(
    response => {
      return response.data.addresses;
    },
    error => {
      console.log(error);
    }
  );
};

export const addAddress = (userId, token, addressArray) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  if (addressArray.length === 1) addressArray[0].default = true;
  return Axios.put(`${API}/api/user/${userId}`, { addresses: addressArray }, config).then(
    response => {
      return response.data.addresses;
    },
    error => {
      console.log(error);
    }
  );
};

export const editAddress = (userId, token, addressArray, editedAddress, index) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  addressArray[index] = editedAddress;

  return Axios.put(`${API}/api/user/${userId}`, { addresses: addressArray }, config).then(
    response => {
      return response.data.addresses;
    },
    error => {
      console.log(error);
    }
  );
};
