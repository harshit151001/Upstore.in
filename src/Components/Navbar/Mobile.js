import React, { useContext } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
        {['Inbox', 'Starred'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
          <div style={{ position: 'fixed', top: '0', zIndex: '100' }}>
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
