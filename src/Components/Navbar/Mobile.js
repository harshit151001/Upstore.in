import React, { useContext } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import i1 from '../Images/i1.jpg';
import { appContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
import Input from '@material-ui/core/Input';
//icons
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
export default function Mobile() {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  const [style, setStyle] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [searchStyles, setSearchStyles] = React.useState({
    position: 'fixed',
    alignItems: 'center',
    height: '9vh',
    fontSize: '28px',
    display: 'none',
    transition: 'all 0.4s ease',
    background: 'white',
    width: '0px',
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
      width: '100%',
    });
  };
  const closeSearch = () => {
    setSearchStyles({
      display: 'none',
      width: '0px',
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setStyle({ ...style, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ width: '280px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ width: '94%', height: '80px', alignItems: 'center' }}>
          <img
            style={{
              width: '75px',
              height: '75px',
              marginTop: '5px',
              marginLeft: '8px',
            }}
            src={i1}
            alt="..."
            className="rounded-circle"
          />
          {true ? (
            <button style={{ marginLeft: '10px' }}>login</button>
          ) : (
            <p style={{ marginLeft: '10px' }}>hi harshit</p>
          )}
        </div>
      </List>
      <List>
        {categorydata.map(({ name, _id }) => {
          return (
            <button
              type="button"
              className="btn btn-light d-block w-100 text-left deschhjb"
              style={{ borderRadius: '0' }}
              key={_id}
            >
              <Link
                className="deschhjb"
                style={{
                  textDecoration: 'none',
                  fontFamily: 'poppins',
                  color: 'inherit',
                }}
                to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
              >
                {name}
              </Link>
            </button>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
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
              paddingLeft: '4vw',
            }}
          >
            <div
              className="row w-100 no-gutters align-items-center"
              style={{ height: '9vh' }}
            >
              <div className="col-6 no-gutters align-items-center d-flex">
                <MenuRoundedIcon
                  onClick={toggleDrawer(anchor, true)}
                  style={{ color: 'rgba(20,20,20)', fontSize: '35px' }}
                />
                <span className="ml-2">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <p
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '23px',
                        margin: '0px',
                        color: 'rgba(20,20,20)',
                      }}
                    >
                      <span
                        style={{
                          color: '#ec436f',
                          fontFamily: 'Pacifico',
                          fontSize: '25px',
                          textDecoration: 'none',
                        }}
                      >
                        Up
                      </span>
                      store
                    </p>
                  </Link>
                </span>
              </div>
              <div className="d-flex col-6 justify-content-end">
                <Link>
                  <span className="mr-2">
                    <SearchRoundedIcon
                      onClick={handleSearch}
                      style={{ color: 'rgba(20,20,20)', fontSize: '28px' }}
                    />
                  </span>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className="mr-2">
                    <FavoriteBorderRoundedIcon
                      style={{ color: 'rgba(20,20,20)', fontSize: '28px' }}
                    />
                  </span>
                </Link>
                <Link
                  to={
                    !state.loggedIn
                      ? '/loginsignup'
                      : `/cart/${isAutheticated().user._id}`
                  }
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span>
                    <ShoppingCartOutlinedIcon
                      style={{ color: 'rgba(20,20,20)', fontSize: '28px' }}
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-12 w-100 ml-0 justify-content-center"
              style={searchStyles}
            >
              <span className="mr-2">
                <KeyboardBackspaceRoundedIcon
                  onClick={closeSearch}
                  style={{ fontSize: '35px' }}
                />
              </span>
              <Input
                style={{ width: '100%', fontSize: '26px' }}
                placeholder="search for products..."
                inputProps={{ 'aria-label': 'description' }}
              />
            </div>
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={style[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
