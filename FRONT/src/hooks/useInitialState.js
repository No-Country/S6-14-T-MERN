import { useState } from 'react';

const initialState = {
  user: {},
  cart: [],
  loading: false,
  error: false
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
  }
}

export default useInitialState;