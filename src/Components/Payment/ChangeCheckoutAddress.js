import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { isAutheticated } from '../../auth/helper/index';
import Addressmodal from '../../Components/Modals/Addressmodal';
import { getAddresses, addAddress } from '../Users/apiCalls';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//?import * as Yup from 'yup';
import { validationSchema, YupError } from '../Users/Addressform';
import { Button } from '../Users/Addressform';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import InputAdornment from '@material-ui/core/InputAdornment';

const ChangeCheckoutAddress = (props) => {
  const { width } = useWindowDimensions();
  const { user, token } = isAutheticated();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('loading');
  const [selectedValue, setSelectedValue] = useState('');
  const { name, phoneNumber } = user;

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
      border: 'none',
      marginTop: '1rem',
    },
    name: {
      fontSize: 20,
      display: 'inline',
      color: '#282c3f',
    },
    pos: {
      marginBottom: 12,
    },
    form: {
      '& > *': {
        // margin: theme.spacing(1),
        width: '25ch',
      },
    },
  });

  const classes = useStyles();

  useEffect(() => {
    const { user, token } = isAutheticated();
    window.scroll(0, 0);

    try {
      getAddresses(user._id, token).then((data) => {
        console.log(data);
        setData(data);
        const index = data.findIndex(
          (address) => address.default === true || 0
        );
        setSelectedValue(index);
      });
    } catch (err) {
      return console.log(err);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      contactName: name,
      contactNumber: phoneNumber,
      address: '',
    },
    validationSchema,
    onSubmit: (values) => {
      let newAddressArray = [];
      newAddressArray = [...data, values];

      if (newAddressArray.length === 1 || selectedValue === null) {
        setSelectedValue(0);
      }

      addAddress(user._id, token, newAddressArray)
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err));
      setOpen(false);
    },
  });

  const handleConfirm = () => {
    const initialIndex = data.findIndex((address) => address.default === true);
    let newAddressArray = data;
    console.log(initialIndex);
    if (initialIndex !== -1) {
      newAddressArray[initialIndex].default = false;
    }

    newAddressArray[selectedValue].default = true;
    addAddress(user._id, token, newAddressArray)
      .then((data) => {
        props.history.push('/checkout');
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const addAddressForm = () => {
    return (
      <form>
        <TextField
          value={formik.values.contactName || ''}
          onChange={formik.handleChange}
          style={{ marginTop: '2vh' }}
          label="Full Name"
          fullWidth={true}
          id="contactName"
          variant="outlined"
          placeholder="Full Name"
        />
        <YupError>
          {formik.touched.contactName ? formik.errors.contactName : null}
        </YupError>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+ 91 | </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 10,
          }}
          style={width > 991 ? { marginTop: '4vh' } : { marginTop: '8vh' }}
          label="Mobile Number"
          value={formik.values.contactNumber}
          onChange={formik.handleChange}
          fullWidth={true}
          id="contactNumber"
          variant="outlined"
          placeholder="Mobile Number"
        />
        <YupError>
          {formik.touched.contactNumber ? formik.errors.contactNumber : null}
        </YupError>
        <TextField
          style={width > 991 ? { marginTop: '4vh' } : { marginTop: '8vh' }}
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          fullWidth={true}
          id="address"
          variant="outlined"
          placeholder="Address"
        />
        <YupError>
          {formik.touched.address ? formik.errors.address : null}
        </YupError>
      </form>
    );
  };

  return (
    <>
      <Addressmodal
        show={open}
        onHide={() => {
          setOpen(false);
        }}
      >
        {addAddressForm()}
        <Button
          style={{ marginTop: '4vh' }}
          type="button"
          onClick={formik.handleSubmit}
        >
          Save
        </Button>
      </Addressmodal>

      <div
        className="container-fluid "
        style={{ background: '#fafafa', minHeight: '91vh' }}
      >
        <div className="container-xl pt-4 pb-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              {data !== 'loading' &&
                data.map(({ contactName, contactNumber, address }, index) => {
                  return (
                    <Card
                      style={
                        selectedValue === index
                          ? {
                              border: 'solid #ec436f',
                              borderWidth: '4px',
                              borderImageSource:
                                'linear-gradient(90deg, rgba(236,67,111,1) 0%, rgba(88,115,241,1) 100%)',
                              borderImageSlice: '1',
                              borderRadius: '10px',
                            }
                          : {}
                      }
                      onClick={() => setSelectedValue(index)}
                      className={classes.root}
                      key={index}
                    >
                      <CardContent>
                        <Typography className={classes.name} gutterBottom>
                          {contactName}
                        </Typography>

                        <Typography variant="body2" component="p">
                          {address}
                        </Typography>
                        <Typography component="p">
                          Mobile: {contactNumber}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              {data === 'loading' ? (
                'Loading...'
              ) : !data.length ? (
                width > 991 ? (
                  <Card
                    onClick={() => {
                      setOpen(true);
                    }}
                    className={classes.root}
                    style={{ cursor: 'pointer' }}
                  >
                    <CardContent>
                      <Typography className={classes.name} gutterBottom>
                        <div style={{ textAlign: 'center' }}>
                          <AddCircleIcon
                            style={{ color: '#ec436f', fontSize: '30px' }}
                          />{' '}
                          Add a new address
                        </div>
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <div style={{ marginTop: '5vh' }}>
                      <div style={{ marginBottom: '8vh' }}>Add Address</div>
                      <div>
                        {addAddressForm()}
                        <div
                          style={{
                            position: 'fixed',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            padding: '31px 10px',
                            boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
                          }}
                        >
                          <Button
                            style={{ marginBottom: '0', padding: '15px' }}
                            type="button"
                            onClick={async () => {
                              formik.handleSubmit();
                            }}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              ) : (
                <>
                  <button
                    onClick={() => {
                      setOpen(true);
                    }}
                    type="button"
                    className="btn btn-danger btn mt-3 btn-block"
                  >
                    <strong>Add New</strong>
                  </button>

                  <button
                    onClick={handleConfirm}
                    type="button"
                    className="btn btn-danger btn mt-3 btn-block"
                  >
                    <strong>Confirm</strong>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ChangeCheckoutAddress);
