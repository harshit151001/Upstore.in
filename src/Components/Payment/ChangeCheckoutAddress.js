import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import Addressmodal from '../../Components/Modals/Addressmodal';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const ChangeCheckoutAddress = () => {
  const { user, token } = isAutheticated();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
      border: 'none',
      marginTop: '1rem'
    },
    name: {
      fontSize: 20,
      display: 'inline',
      color: '#282c3f'
    },
    pos: {
      marginBottom: 12
    },
    form: {
      '& > *': {
        // margin: theme.spacing(1),
        width: '25ch'
      }
    }
  });

  const classes = useStyles();

  useEffect(() => {
    const { user, token } = isAutheticated();
    let mounted = true;

    const loadData = async () => {
      try {
        const response = await fetch(`${API}/api/user/${user._id}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        response.json().then(response => {
          setData(response.addresses);
          const index = response.addresses.findIndex(address => address.default === true);

          setSelectedValue(index);
        });
      } catch (err) {
        return console.log(err);
      }
    };

    if (mounted) {
      window.scroll(0, 0);
      loadData();
    }

    return () => {
      mounted = false;
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      contactName: '',
      contactNumber: '',
      address: ''
    },
    onSubmit: values => {
      let newAddressArray = [];
      newAddressArray = [...data, values];
      if (newAddressArray.length === 1) {
        newAddressArray[0].default = true;
        setSelectedValue(0);
      }
      fetch(`${API}/api/user/${user._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ addresses: newAddressArray })
      })
        .then(response => {
          response.json().then(function (response) {
            console.log(response);
          });
        })
        .catch(err => console.log(err));
      setData([...data, values]);
      console.log('Form Date', values);
    }
  });

  console.log(data.length);
  const handleConfirm = () => {
    const initialIndex = data.findIndex(address => address.default === true);
    let newAddressArray = data;
    newAddressArray[initialIndex].default = false;
    newAddressArray[selectedValue].default = true;

    fetch(`${API}/api/user/${user._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ addresses: newAddressArray })
    })
      .then(response => {
        response.json().then(function (response) {
          console.log(response);
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Addressmodal style={{ textAlign: 'center' }} show={open} onClose={handleClose}>
        <form className="form-group" noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="contactName"></label>
          </div>
          <div>
            <TextField label="Name" fullWidth={true} variant="outlined" type="text" onChange={formik.handleChange} id="contactName" value={formik.values.contactName} />
          </div>
          <div>
            {' '}
            <label htmlFor="contactNumber"></label>
          </div>
          <div>
            <TextField label="Mobile Number" fullWidth={true} variant="outlined" type="text" onChange={formik.handleChange} id="contactNumber" value={formik.values.contactNumber} />
          </div>

          <div>
            <label htmlFor="address"></label>
          </div>

          <div>
            {' '}
            <TextField label="Address" fullWidth={true} variant="outlined" type="text" onChange={formik.handleChange} id="address" value={formik.values.address} />
          </div>
          <div>
            <button
              onClick={() => {
                formik.handleSubmit();
                setOpen(false);
              }}
              type="button"
              className="btn btn-danger btn mt-3 btn-block"
            >
              <strong>Submit</strong>
            </button>
          </div>
        </form>
      </Addressmodal>

      <div className="container-fluid " style={{ background: '#fafafa', minHeight: '91vh' }}>
        <div className="container-xl pt-4 pb-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              {data.map(({ contactName, contactNumber, address }, index) => {
                return (
                  <Card className={classes.root} key={index}>
                    <CardContent>
                      <Radio checked={selectedValue == parseInt(index)} onChange={handleChange} value={index} className="pt-0" name="radio-button-demo" />
                      <Typography className={classes.name} gutterBottom>
                        {contactName}
                      </Typography>

                      <Typography variant="body2" component="p">
                        {address}
                      </Typography>
                      <Typography component="p">Mobile: {contactNumber}</Typography>
                    </CardContent>
                  </Card>
                );
              })}
              {!data.length ? (
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
                        <AddCircleIcon style={{ color: '#ec436f', fontSize: '30px' }} /> Add a new address
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              ) : (
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  type="button"
                  className="btn btn-danger btn mt-3 btn-block"
                >
                  <strong>add new address</strong>
                </button>
              )}

              {!data.length ? (
                ''
              ) : (
                <Link style={{ textDecoration: 'none' }} to="/checkout">
                  <button onClick={handleConfirm} type="button" className="btn btn-danger btn mt-3 btn-block">
                    <strong>Confirm</strong>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeCheckoutAddress;
