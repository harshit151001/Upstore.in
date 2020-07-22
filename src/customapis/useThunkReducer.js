import { useImmerReducer } from 'use-immer';

export default function useThunkReducer(reducer, initialState) {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const thunkDispatch = (action) => {
    console.log(action);
    if (typeof action === 'function') {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, thunkDispatch];
}
