import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { isAutheticated } from '../../auth/helper';
import Axios from 'axios';
import API from '../../backend';
import useWindowDimensions from '../../customapis/useWindowDimensions';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '1vw',
      width: '80%'
    }
  }
}));

export default function Upload({ shop }) {
  const [values, setValues] = useState({
    images: '',
    name: '',
    shopName: shop.shopName,
    description: '',
    category: shop.category,
    city: '5eff8e76d75ecb3735b243b1',

    shopId: shop.shopId,
    markedPrice: '',
    stock: '',
    price: ''
  });

  const [hasVariants, setHasVariants] = useState(false);
  const classes = useStyles();

  const { width } = useWindowDimensions();
  const { token, user } = isAutheticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const handleChange = name => event => {
    name === 'file' ? setValues({ ...values, images: event.target.files }) : setValues({ ...values, [name]: event.target.value });
  };

  const Upload = e => {
    e.preventDefault();
    const { images, name, shopName, description, category, city, shopId, markedPrice, stock, price } = values;
    const fd = new FormData();
    for (let i = 0; i < images.length; i++) {
      fd.append(`images`, images[i]);
    }
    console.log(values);
    fd.append(`name`, name);
    fd.append(`shopName`, shopName);
    fd.append(`description`, description);
    fd.append(`category`, category);
    fd.append(`city`, city);
    fd.append(`shopId`, shopId);
    fd.append(`markedPrice`, markedPrice);
    fd.append(`stock`, stock);

    fd.append(`price`, price);

    Axios.post(`${API}/api/product/create/${user._id}`, fd, config).then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={width < 780 ? { margin: 'auto', width: '100%' } : { width: '100%' }}>
        Does this product have variants?
        <div style={{ marginLeft: '2vh' }}>
          <input onClick={() => setHasVariants(true)} checked={hasVariants} type="checkbox" /> YES
          <input onClick={() => setHasVariants(false)} checked={!hasVariants} type="checkbox" /> NO
        </div>
      </div>
      <div>
        {hasVariants ? (
          <div>coming soon</div>
        ) : (
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              {/* id="shopId" onChange={handleChange('shopId')} placeholder="Shop ID" */}
              <div>
                <TextField fullWidth={true} id="name" onChange={handleChange('name')} label="name" variant="outlined" color="secondary" />
              </div>
              <div>
                <TextField
                  fullWidth={true}
                  id="stock"
                  onChange={handleChange('stock')}
                  label="Stock"
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true
                  // }}
                  variant="outlined"
                />

                <TextField
                  fullWidth={true}
                  id="price"
                  onChange={handleChange('price')}
                  label="Price"
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true
                  // }}
                  variant="outlined"
                />

                <TextField
                  fullWidth={true}
                  id="markedPrice"
                  onChange={handleChange('markedPrice')}
                  label="Marked Price"
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true
                  // }}
                  variant="outlined"
                />
              </div>
              <div>
                <textarea style={{ width: '80%' }} id="description" onChange={handleChange('description')}></textarea>
              </div>
              <div>
                <input accept="file_extension | image/png | image/jpg | image/jpeg" id="file" onChange={handleChange('file')} type="file" multiple />
              </div>
            </form>
            <div>
              <button onClick={Upload}>Upload</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
