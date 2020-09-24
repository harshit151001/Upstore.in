import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { isAutheticated } from '../../auth/helper';
import Axios from 'axios';
import API from '../../backend';
import useWindowDimensions from '../../customapis/useWindowDimensions';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '1vw',
      width: '80%'
    }
  }
}));

export default function Upload({ shop }) {
  const [imagePaths, setImagePaths] = useState([]);
  const [imageFiles, setImageFiles] = useState({
    selectedFiles: ''
  });
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

  const [inputFields, setInputFields] = useState([
    {
      images: '',
      name: '',
      size: '',
      color: '',
      shopName: shop.shopName,
      description: '',
      category: shop.category,
      city: '5eff8e76d75ecb3735b243b1',

      shopId: shop.shopId,
      markedPrice: '',
      stock: '',
      price: ''
    }
  ]);

  const [hasVariants, setHasVariants] = useState(false);
  const classes = useStyles();

  const { width } = useWindowDimensions();
  const { token, user } = isAutheticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        images: '',
        name: '',
        size: '',
        color: '',
        shopName: shop.shopName,
        description: '',
        category: shop.category,
        city: '5eff8e76d75ecb3735b243b1',

        shopId: shop.shopId,
        markedPrice: '',
        stock: '',
        price: ''
      }
    ]);
  };

  const handleUpload = e => {
    e.preventDefault();
    const { selectedFiles } = imageFiles;
    console.log(selectedFiles);
    const fd = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      fd.append(`images`, selectedFiles[i]);
    }

    Axios.post(`${API}/api/images/upload/${user._id}`, fd, config).then(
      response => {
        setImagePaths(response.data);
      },
      error => {
        console.log(error);
      }
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('InputFields', inputFields);
    Axios.post(`${API}/api/productWithVariants/create/${user._id}`, inputFields, config).then(
      response => {
        console.log('sent');
      },
      error => {
        console.log(error);
      }
    );
  };

  const handleChange = name => event => {
    name === 'file' ? setValues({ ...values, images: event.target.files }) : setValues({ ...values, [name]: event.target.value });
  };

  const handleBulkImage = name => event => {
    setImageFiles({ selectedFiles: event.target.files });
  };

  const Upload = e => {
    e.preventDefault();
    const { images, name, shopName, description, category, city, shopId, markedPrice, stock, price } = values;
    console.log(values);
    const fd = new FormData();
    for (let i = 0; i < images.length; i++) {
      fd.append(`images`, images[i]);
    }

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

  console.log('render');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={width < 780 ? { margin: 'auto', width: '100%' } : { width: '100%' }}>
        Does this product have variants?
        <div style={{ marginLeft: '2vh' }}>
          <input onClick={() => setHasVariants(true)} readOnly checked={hasVariants} type="checkbox" /> YES
          <input onClick={() => setHasVariants(false)} readOnly checked={!hasVariants} type="checkbox" /> NO
        </div>
      </div>
      <div>
        {hasVariants ? (
          <>
            <div style={{ display: 'flex', width: '100%', margin: 'auto' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                  <input id="file" onChange={handleBulkImage('file')} type="file" multiple />

                  <button type="submit" onClick={handleUpload}>
                    upload
                  </button>
                </div>
              </div>
              <div style={{ height: '400px', backgroundColor: '#FFFAFA', overflow: 'scroll', width: '50%', margin: 'auto' }}>
                {imagePaths.map((path, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <img style={{ height: '200px' }} src={`${API}${path.split('public')[1]}`} alt="" />
                      </div>

                      <div>{path}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              {' '}
              {inputFields.map((inputFields, index) => (
                <>
                  <div key={index} style={{ margin: '1vh' }}>
                    <input name="name" label="Name" value={inputFields.name} onChange={event => handleChangeInput(index, event)} />
                    <input name="size" label="Color" value={inputFields.size} onChange={event => handleChangeInput(index, event)} />
                    <input name="color" label="Color" value={inputFields.color} onChange={event => handleChangeInput(index, event)} />
                    <input name="description" label="Description" value={inputFields.description} onChange={event => handleChangeInput(index, event)} />
                    <input name="markedPrice" label="Marked Price" value={inputFields.markedPrice} onChange={event => handleChangeInput(index, event)} />
                    <input name="price" label="Price" value={inputFields.price} onChange={event => handleChangeInput(index, event)} />
                    <input name="stock" label="Stock" value={inputFields.stock} onChange={event => handleChangeInput(index, event)} />
                    <input name="images" label="Image Paths" value={inputFields.images} onChange={event => handleChangeInput(index, event)} />

                    <IconButton onClick={() => handleRemoveFields(index)}>
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={() => handleAddFields()}>
                      <AddIcon />
                    </IconButton>
                  </div>
                </>
              ))}
              <button onClick={handleSubmit}>Upload</button>
            </div>
          </>
        ) : (
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              {/* id="shopId" onChange={handleChange('shopId')} placeholder="Shop ID" */}
              <div>
                <TextField fullWidth={true} id="name" onChange={handleChange('name')} label="name" variant="outlined" color="secondary" />
              </div>
              <div>
                <TextField fullWidth={true} id="stock" onChange={handleChange('stock')} label="Stock" type="number" variant="outlined" />

                <TextField fullWidth={true} id="price" onChange={handleChange('price')} label="Price" type="number" variant="outlined" />

                <TextField fullWidth={true} id="markedPrice" onChange={handleChange('markedPrice')} label="Marked Price" type="number" variant="outlined" />
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
