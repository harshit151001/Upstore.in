//?libraries
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
//?components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import API from '../../backend';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
//?state
import { appContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
//?icons
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import userIcon from '../Images/userIcon.png';
import logo from '../Images/UpLogoFinal.png';
/****************************************************************************************************/

const Mobile = props => {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  /****************************************************************************************************/
  const [style, setStyle] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const [searchStyles, setSearchStyles] = React.useState({
    position: 'fixed',
    alignItems: 'center',
    height: '9vh',
    fontSize: '28px',
    zIndex: '-1',
    display: 'none',
    background: 'white',
    width: '0px'
  });
  const handleSearch = () => {
    setSearchStyles({
      position: 'fixed',
      alignItems: 'center',
      height: '9vh',
      fontSize: '28px',
      display: 'flex',
      transform: 'translate(-5vw,-9vh)',
      zIndex: '12000',
      background: 'white',
      width: '100%'
    });
  };
  const closeSearch = () => {
    setSearchStyles({
      display: 'none',
      width: '0px'
    });
  };
  /****************************************************************************************************/
  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setStyle({ ...style, [anchor]: open });
  };

  const [enteredFilter, setEnteredFilter] = useState('');

  const inputRef = useRef();
  console.log(enteredFilter);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current.value && enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? '' : `?search=${enteredFilter}`;
        console.log(`${API}/api/search/products/5eff8e76d75ecb3735b243b1` + query);
        fetch(`${API}/api/search/products/5eff8e76d75ecb3735b243b1` + query).then(response => {
          response
            .json()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef]);

  const list = anchor => (
    <div style={{ width: '280px' }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List style={{ maxHeight: '50px' }}>
        <Link style={{ textDecoration: 'none' }} to={!state.loggedIn ? '/loginsignup' : '/userdashboard'}>
          <ListItem button>
            <ListItemIcon>
              <img
                style={{
                  height: '40px'
                }}
                src={userIcon}
                alt="..."
              />
            </ListItemIcon>
            <p
              style={{
                alignSelf: 'center',
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#0c0e21',
                transform: 'translateY(9px)'
              }}
            >
              {`Hi, ${state.loggedIn ? isAutheticated().user.name || isAutheticated().user.phoneNumber : 'there'}`}
            </p>
            <span>
              {!state.loggedIn && (
                <Button
                  fullWidth={true}
                  style={{
                    backgroundColor: '#ec436f',
                    color: 'white',
                    marginLeft: '10px'
                  }}
                >
                  Login
                </Button>
              )}
            </span>
          </ListItem>
        </Link>
      </List>
      <Divider style={{ marginTop: '4vh' }} />
      {state.loggedIn && (
        <div
          className="deschhjb"
          style={{
            textDecoration: 'none',
            fontFamily: 'poppins',
            color: 'inherit'
          }}
        >
          <List>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/userdashboard">
              <ListItem button>
                <ListItemText> Dashboard</ListItemText>
              </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/userdashboard/address">
              <ListItem button>
                <ListItemText> Addresses</ListItemText>
              </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/userdashboard/orders">
              <ListItem button>
                <ListItemText> Orders</ListItemText>
              </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/userdashboard/details/edit">
              <ListItem button>
                <ListItemText>Profile Details</ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      )}

      <Divider />
      <List>
        {categorydata.map(({ name, _id }) => {
          return (
            <Link
              key={_id}
              to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
              style={{
                textDecoration: 'none',
                fontFamily: 'poppins',
                color: 'inherit'
              }}
            >
              <ListItem button key={_id}>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <div style={props.history.location.pathname === '/full-image-view' ? { display: 'none' } : {}}>
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
          <div
            style={{
              position: 'fixed',
              top: '0',
              zIndex: '100',
              width: '100vw',
              boxShadow: '0px 0px 4px 2px rgba(97,97,97, 0.3)',
              height: '9vh',
              backdropFilter: 'blur(5px)',
              background: 'rgba(255, 255, 255, 0.9)',
              paddingRight: '4vw',
              paddingLeft: '4vw'
            }}
          >
            <div className="row w-100 no-gutters align-items-center" style={{ height: '9vh' }}>
              <div className="col-6 no-gutters align-items-center d-flex">
                <MenuRoundedIcon onClick={toggleDrawer(anchor, true)} style={{ color: 'rgba(20,20,20)', fontSize: '35px' }} />
                <span className="ml-1">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        height: '6vh',
                        alignSelf: 'center',
                        transform: 'translateY(4px)',
                        maxHeight: '40px'
                      }}
                    />
                  </Link>
                </span>
              </div>
              <div className="d-flex col-6 justify-content-end">
                <Link>
                  <span className="mr-2">
                    <SearchRoundedIcon onClick={handleSearch} style={{ color: 'rgba(20,20,20)', fontSize: '28px' }} />
                  </span>
                </Link>
                <Link to={!state.loggedIn ? '/loginsignup' : `/wishlist`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className="mr-2">
                    <FavoriteBorderRoundedIcon style={{ color: 'rgba(20,20,20)', fontSize: '28px' }} />
                  </span>
                </Link>
                <Link to={!state.loggedIn ? '/loginsignup' : `/cart/${isAutheticated().user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span>
                    <ShoppingCartOutlinedIcon style={{ color: 'rgba(20,20,20)', fontSize: '28px' }} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-12 w-100 ml-0 justify-content-center" style={{ ...searchStyles }}>
              <span className="mr-2">
                <KeyboardBackspaceRoundedIcon onClick={closeSearch} style={{ fontSize: '35px', marginTop: '0px' }} />
              </span>
              <form action={`/products/search?page=1&&search=` + enteredFilter}>
                <Input ref={inputRef} value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} style={{ width: '85vw', fontSize: '26px', top: '2.2vh' }} placeholder="search for products..." inputProps={{ 'aria-label': 'description' }} />

                <Link
                  to={`/products/search?page=1&&search=` + enteredFilter}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    height: '5vh'
                  }}
                >
                  <button style={{ display: 'none' }} />
                </Link>
              </form>
            </div>
          </div>
          <SwipeableDrawer anchor={anchor} open={style[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default withRouter(Mobile);
