import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function MySnackbar({ vertical, horizontal, message }) {
  return (
    <div>
      <Snackbar style={{ marginTop: '7vh' }} anchorOrigin={{ vertical, horizontal }} open={true} message={message} key={vertical + horizontal} />
    </div>
  );
}
