import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { isAutheticated } from '../../auth/helper';
import Axios from 'axios';
import API from '../../backend';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useImmerReducer } from 'use-immer';
import MySnackbar from '../Snackbar/Snackbar';
import styled from 'styled-components';

const RequiredErr = styled.div`
  text-align: left;
  color: red;
  margin-left: 7vh;
`;

const UploadBtn = styled.button`
width: 80%;
    background-color: #ec436f;
    color: white;
    letter-spacing: 5px;
    font-weight: 800;
    font-size: 18px;
    padding: 5px;
    border: navajowhite;
    border-radius: 5px;
    margin 1vh 0;
`;

const CopyButton = styled.button`
  height: 30px;
  background-color: #ec436f;
  border: none;
  color: white;
  font-weight: 400;
`;

const ImgCard = styled.div`
  border: 1px solid rgb(224, 224, 224);
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin: auto;
`;

const ImageHolder = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  border: solid black 1px;
`;

const AddSubtract = styled.button`
  border-radius: 10px;
  border: none;
  padding: 2px 10px;

  color: white;
  border: solid rgb(92, 106, 223);

  font-weight: 800;
  background-color: #00ccff;
`;

const ButtonWrapper = styled.div`
  max-width: 791px;
  text-align: right;
`;

const VariantWrapper = styled.div`
  margin: 1vh;
  max-width: 900px;
`;

const Button = styled.button`
  background-color: rgb(92, 106, 223);
  border-radius: 5px;
  padding: 3px 20px;
  color: white;
  font-weight: 700;
`;

export const initialState = {
  images: {
    value: '',
    hasErrors: true,
    message: ''
  },
  name: {
    value: '',
    hasErrors: true,
    message: ''
  },
  description: {
    value: '',
    hasErrors: false,
    message: ''
  },
  markedPrice: {
    value: '',
    hasErrors: true,
    message: ''
  },
  stock: {
    value: '',
    hasErrors: true,
    message: ''
  },
  price: {
    value: '',
    hasErrors: true,
    message: ''
  }
};

export function ourReducer(draft, action) {
  switch (action.type) {
    case 'name':
      draft.name.value = action.value;
      if (action.value.length) {
        draft.name.hasErrors = false;
      } else {
        draft.name.hasErrors = true;
        draft.name.message = 'required';
      }
      return;
    case 'images':
      draft.images.value = action.value;
      if (action.value.length) {
        draft.images.hasErrors = false;
      } else {
        draft.images.hasErrors = true;
        draft.images.message = 'required';
      }
      return;

    case 'description':
      draft.description.value = action.value;
      return;

    case 'markedPrice':
      draft.markedPrice.value = action.value;
      if (action.value.length) {
        draft.markedPrice.hasErrors = false;
      } else {
        draft.markedPrice.hasErrors = true;
        draft.markedPrice.message = 'required';
      }
      return;

    case 'stock':
      draft.stock.value = action.value;
      if (action.value.length) {
        draft.stock.hasErrors = false;
      } else {
        draft.stock.hasErrors = true;
        draft.stock.message = 'required';
      }
      return;

    case 'price':
      draft.price.value = action.value;
      if (action.value.length) {
        draft.price.hasErrors = false;
      } else {
        draft.price.hasErrors = true;
        draft.price.message = 'required';
      }
      return;
  }
}

export default function Upload({ shop }) {
  const [imagePaths, setImagePaths] = useState([]);
  const [imageFiles, setImageFiles] = useState({
    selectedFiles: ''
  });
  const [errors, setErrors] = useState(0);
  const [showSnack, setShowSnack] = useState(false);
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  const [inputFields, setInputFields] = useState([
    {
      photos: '',
      name: '',
      size: '',
      color: '',
      shopName: '',
      description: '',
      category: '',
      city: '5eff8e76d75ecb3735b243b1',
      shopId: '',
      markedPrice: '',
      stock: '',
      price: ''
    }
  ]);
  console.log(inputFields.length);
  const [hasVariants, setHasVariants] = useState(false);

  const { width } = useWindowDimensions();
  const { token, user } = isAutheticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: '1vw',
        width: '80%'
      },
      margin: '1vh 1vh 1vh 0'
    },
    rootWidth: {
      width: '400px'
    }
  }));
  const classes = useStyles();
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
        photos: '',
        name: '',
        size: '',
        color: '',
        shopName: '',
        description: '',
        category: '',
        city: '5eff8e76d75ecb3735b243b1',
        shopId: '',
        markedPrice: '',
        stock: '',
        price: ''
      }
    ]);
  };

  const handleUpload = e => {
    e.preventDefault();
    const { selectedFiles } = imageFiles;

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

  const ValidateVariants = () => {
    const arr = [];

    inputFields.forEach((inputField, index) => {
      for (const key in inputField) {
        if (key === 'name' || key === 'markedPrice' || key === 'price' || key === 'stock' || key === 'photos') {
          if (inputField[key].trim() === '') {
            arr.push(1);
          }
        }
      }
    });

    return !arr.length;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (ValidateVariants()) {
      inputFields.forEach(inputField => {
        inputField.shopId = shop.shopId;
        inputField.shopName = shop.shopName;
        inputField.category = shop.category;
      });

      Axios.post(`${API}/api/productWithVariants/create/${user._id}`, inputFields, config).then(
        response => {
          setShowSnack(true);
          setTimeout(() => setShowSnack(false), 3000);
          return;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      setErrors(1);
    }
  };

  const handleBulkImage = name => event => {
    setImageFiles({ selectedFiles: event.target.files });
  };

  const ErrorVariantUpload = (index, name) => {
    return errors && inputFields[index][name].trim() === '' ? { border: 'solid red 2px' } : {};
  };

  const Upload = e => {
    e.preventDefault();
    const { images, name, description, markedPrice, stock, price } = state;

    const checkErr = [];
    for (const key in state) {
      if (state[key].hasErrors) {
        checkErr.push(1);
        console.log(checkErr);
        dispatch({ type: key, value: '' });
      }
    }
    console.log(checkErr);
    if (!checkErr.length) {
      const fd = new FormData();
      for (let i = 0; i < images.value.length; i++) {
        fd.append(`images`, images.value[i]);
      }

      fd.append(`name`, name.value);
      fd.append(`shopName`, shop.shopName);
      fd.append(`description`, description.value);
      fd.append(`category`, shop.category);
      fd.append(`city`, '5eff8e76d75ecb3735b243b1');
      fd.append(`shopId`, shop.shopId);
      fd.append(`markedPrice`, markedPrice.value);
      fd.append(`stock`, stock.value);

      fd.append(`price`, price.value);

      Axios.post(`${API}/api/product/create/${user._id}`, fd, config).then(
        response => {
          setShowSnack(true);
          setTimeout(() => setShowSnack(false), 3000);
          console.log(response.data);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Error in Validation');
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {showSnack && <MySnackbar vertical={width > 990 ? 'top' : 'bottom'} horizontal={'center'} message={'Product created successfully'} />}
      <div style={width < 780 ? { margin: 'auto', width: '100%' } : { width: '100%' }}>
        Does this product have variants?
        <div style={{ marginLeft: '2vh' }}>
          <input onClick={() => setHasVariants(true)} readOnly checked={hasVariants} type="checkbox" /> YES
          <input onClick={() => setHasVariants(false)} readOnly checked={!hasVariants} type="checkbox" /> NO
        </div>
      </div>
      <div style={{ width: '100%' }}>
        {hasVariants ? (
          width > 1020 ? (
            <>
              <div style={{ display: 'flex', width: '100%', margin: 'auto' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ margin: 'auto' }}>
                    <input id="file" onChange={handleBulkImage('file')} type="file" multiple />

                    <Button type="submit" onClick={handleUpload}>
                      UPLOAD
                    </Button>
                  </div>
                </div>
                <div style={{ height: '400px', backgroundColor: '#FFFAFA', overflow: 'scroll', width: '50%', margin: 'auto' }}>
                  {imagePaths.map((path, index) => {
                    return (
                      <ImgCard key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <ImageHolder>
                            <Image src={`${API}${path.split('public')[1]}`} alt="" />
                          </ImageHolder>
                          <CopyButton
                            onClick={() => {
                              navigator.clipboard.writeText(path);
                            }}
                          >
                            Copy
                          </CopyButton>
                        </div>

                        {path}
                      </ImgCard>
                    );
                  })}
                </div>
              </div>

              <div>
                {' '}
                {inputFields.map((fields, index) => (
                  <VariantWrapper key={index}>
                    <TextField className={classes.root} style={ErrorVariantUpload(index, 'name')} variant="filled" name="name" label="Name" value={fields.name} onChange={event => handleChangeInput(index, event)} />

                    <TextField className={classes.root} variant="filled" name="size" label="Size" value={fields.size} onChange={event => handleChangeInput(index, event)} />
                    <TextField className={classes.root} variant="filled" name="color" label="Color" value={fields.color} onChange={event => handleChangeInput(index, event)} />

                    <TextField className={classes.root} style={ErrorVariantUpload(index, 'markedPrice')} variant="filled" name="markedPrice" type="number" label="Marked Price" value={fields.markedPrice} onChange={event => handleChangeInput(index, event)} />
                    <TextField className={classes.root} style={ErrorVariantUpload(index, 'price')} variant="filled" name="price" type="number" label="Price" value={fields.price} onChange={event => handleChangeInput(index, event)} />
                    <TextField className={classes.root} style={ErrorVariantUpload(index, 'stock')} variant="filled" name="stock" type="number" label="Stock" value={fields.stock} onChange={event => handleChangeInput(index, event)} />
                    <TextField className={`${classes.root} ${classes.rootWidth}`} multiline variant="filled" name="description" label="Description" value={fields.description} onChange={event => handleChangeInput(index, event)} />

                    <TextField className={`${classes.root} ${classes.rootWidth}`} style={ErrorVariantUpload(index, 'photos')} multiline variant="filled" name="photos" label="Image Paths" value={fields.photos} onChange={event => handleChangeInput(index, event)} />

                    <ButtonWrapper>
                      {inputFields.length > 1 && (
                        <AddSubtract style={{ marginRight: '0.5vh' }} onClick={() => handleRemoveFields(index)}>
                          <RemoveIcon />
                        </AddSubtract>
                      )}

                      <AddSubtract onClick={() => handleAddFields()}>
                        <AddIcon />
                      </AddSubtract>
                    </ButtonWrapper>
                  </VariantWrapper>
                ))}
                <Button onClick={handleSubmit}>UPLOAD</Button>
              </div>
            </>
          ) : (
            'This feature is available in Desktop Only'
          )
        ) : (
          <div style={{ textAlign: 'center' }}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField fullWidth={true} id="name" onChange={e => dispatch({ type: 'name', value: e.target.value })} name="name" label="name" variant="outlined" color="secondary" />
                {state.name.hasErrors && <RequiredErr>{state.name.message} </RequiredErr>}
              </div>
              <div>
                <TextField fullWidth={true} id="stock" onChange={e => dispatch({ type: 'stock', value: e.target.value })} label="Stock" type="number" variant="outlined" />
                {state.stock.hasErrors && <RequiredErr>{state.stock.message} </RequiredErr>}
                <TextField fullWidth={true} id="price" onChange={e => dispatch({ type: 'price', value: e.target.value })} label="Price" type="number" variant="outlined" />
                {state.price.hasErrors && <RequiredErr>{state.price.message} </RequiredErr>}
                <TextField fullWidth={true} id="markedPrice" onChange={e => dispatch({ type: 'markedPrice', value: e.target.value })} label="Marked Price" type="number" variant="outlined" />
                {state.markedPrice.hasErrors && <RequiredErr>{state.markedPrice.message} </RequiredErr>}
              </div>
              <div>
                <textarea placeholder="Description (optional)" style={{ width: '80%', marginLeft: '1vh' }} id="description" onChange={e => dispatch({ type: 'description', value: e.target.value })}></textarea>
              </div>
              <div>
                <input accept="file_extension | image/png | image/jpg | image/jpeg" id="file" onChange={e => dispatch({ type: 'images', value: e.target.files })} type="file" multiple />
                {state.images.hasErrors && <RequiredErr>{state.images.message} </RequiredErr>}
              </div>
            </form>
            <div>
              <UploadBtn onClick={Upload}>UPLOAD</UploadBtn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
