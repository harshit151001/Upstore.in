const appReducer = (draft, action) => {
  switch (action.type) {
    case 'GETCATEGORIES':
      draft.categorydata = action.payload;
      break;
    //******************************************************************************//
    case 'GETCART':
      draft.cart = action.payload;
      break;
    case 'GETWISHLIST':
      draft.wishlist = action.payload;
      break;
    case 'UPDATECART':
      draft.cart = action.payload.filter((item) => item.wishlist === 0);
      break;
    case 'UPDATEWISHLIST':
      draft.wishlist = action.payload.filter((item) => item.wishlist === 1);
      break;
    case 'REMOVEDFROMCART':
      draft.cart = draft.cart.filter(
        (item) => item.product._id !== action.payload
      );
      break;
    case 'REMOVEDFROMWISHLIST':
      draft.wishlist = draft.wishlist.filter(
        (item) => item.product._id !== action.payload
      );
      break;
    //******************************************************************************//
    case 'LOADING':
      draft.loading = true;
      break;
    case 'LOADED':
      draft.loading = false;
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
