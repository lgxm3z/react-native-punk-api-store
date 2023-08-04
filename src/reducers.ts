import {combineReducers} from 'redux';

type FetchBeersRequestAction = {
  type: 'FETCH_BEERS_REQUEST';
  payload: number;
};

type FetchBeersSuccessAction = {
  type: 'FETCH_BEERS_SUCCESS';
  payload: any[];
};

type FetchBeersFailureAction = {
  type: 'FETCH_BEERS_FAILURE';
  payload: any;
};

type BeersAction =
  | FetchBeersRequestAction
  | FetchBeersSuccessAction
  | FetchBeersFailureAction;

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const beersReducer = (state = initialState, action: BeersAction) => {
  switch (action.type) {
    case 'FETCH_BEERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_BEERS_SUCCESS':
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false,
      };
    case 'FETCH_BEERS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  beers: beersReducer,
});

export default rootReducer;
