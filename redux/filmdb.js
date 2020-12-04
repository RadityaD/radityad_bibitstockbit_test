import { combineReducers, createStore } from 'redux';

const initialStoreValue = {
  s: 'Batman',
  page: 1,
};

// Actions
const UPDATE_LIST_PARAMS = 'UPDATE_LIST_PARAMS';

// Action Creator
export const uploadFetchParams = (payload) => ({
  type: UPDATE_LIST_PARAMS,
  payload,
});

// Reducers
const reducers = (state = initialStoreValue, action) => {
  switch (action.type) {
    case UPDATE_LIST_PARAMS:
      console.log(UPDATE_LIST_PARAMS);
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Combine Reducer
const rootReducer = combineReducers({
  filmdb: reducers,
});

// Create Store
export const store = createStore(rootReducer);
