const appReducer = (draft, action) => {
  switch (action.type) {
    case 'Addtocart':
      draft.Cart.push(action.value);
      break;
    default:
      break;
  }
};
export default appReducer;
