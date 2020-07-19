const appReducer = (draft, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      draft.Cart.push(action.value);
      break;
    default:
      break;
  }
};
export default appReducer;
