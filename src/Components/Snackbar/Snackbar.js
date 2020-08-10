import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function Snackbar({ vertical, horizontal, message }) {
  return (
    <div>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={true} message={message} key={vertical + horizontal} />
    </div>
  );
}
