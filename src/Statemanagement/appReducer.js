const appReducer = (draft, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      draft.Cart.push(action.value);
      break;
    case 'login':
      draft.loggedIn = true;
      break;
    case 'logout':
      draft.loggedIn = false;
      break;
    default:
      break;
  }
};
export default appReducer;
