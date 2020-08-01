import React, { useContext } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import i1 from '../Images/i1.jpg';
import { appContext } from '../../Statemanagement/Statecontext';

export default function Mobile() {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  const [style, setStyle] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
            class="rounded-circle"
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
            }}
          >
            <button onClick={toggleDrawer(anchor, true)}>{anchor}</button>
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
