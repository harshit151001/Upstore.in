import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Loginwithphone from '../Users/Loginwithphone';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Loginmodal = ({ show, onhide }) => {
  return (
    <>
      <Dialog
        open={show}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth="xs"
        keepMounted
        onClose={onhide}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={onhide}>
          Login or Signup
        </DialogTitle>
        <Modal.Body style={{ marginTop: '3vh' }}>
          <Loginwithphone />
        </Modal.Body>
      </Dialog>
    </>
  );
};

export default Loginmodal;
