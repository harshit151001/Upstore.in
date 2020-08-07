import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { appContext } from '../../Statemanagement/Statecontext';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '1vw',
      width: '80%'
    }
  }
}));

export default function ProductUpload() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const { state } = useContext(appContext);
  const { categorydata } = state;
  console.log(categorydata);

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: 'USD',
      label: '$'
    },
    {
      value: 'EUR',
      label: '€'
    },
    {
      value: 'BTC',
      label: '฿'
    },
    {
      value: 'JPY',
      label: '¥'
    }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField fullWidth={true} id="outlined-secondary" label="name" variant="outlined" color="secondary" />
        </div>
        <div>
          <TextField fullWidth={true} id="outlined-secondary" label="Shop Name" variant="outlined" color="secondary" />
        </div>
        <div>
          <TextField fullWidth={true} id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency" variant="outlined">
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField fullWidth={true} id="outlined-secondary" label="Shop ID" variant="outlined" color="secondary" />
        </div>
        <div>
          <TextField
            fullWidth={true}
            id="outlined-number"
            label="MRP"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            fullWidth={true}
            id="outlined-number"
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            fullWidth={true}
            id="outlined-number"
            label="Stock"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
        </div>
        <div>
          <input accept="file_extension | image/png | image/jpg | image/jpeg" className={classes.input} id="raised-button-file" multiple type="file" />
          <label htmlFor="raised-button-file"></label>
        </div>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <button type="button" className="btn btn-danger btn mt-3 btn-block">
            <strong>Upload</strong>
          </button>
        </div>
      </form>
    </div>
  );
}
