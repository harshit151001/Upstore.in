import { useImmerReducer } from 'use-immer';
import React from 'react';
export default function useThunkReducer(reducer, initialState) {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const thunkDispatch = React.useCallback(
    (action) => {
      if (typeof action === 'function') {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );
  return [state, thunkDispatch];
}
