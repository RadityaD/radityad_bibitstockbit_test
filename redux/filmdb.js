import { combineReducers, createStore } from 'redux';

const initialStoreValue = {
  s: 'Batman',
  page: 1,
};

// Actions
const UPDATE_LIST_PARAMS = 'UPDATE_LIST_PARAMS';
const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH KEYWORD';

// Action Creator
export const uploadFetchParams = (payload) => ({
  type: UPDATE_LIST_PARAMS,
  payload,
});

export const updateSearchKeyword = (payload) => ({
  type: UPDATE_SEARCH_KEYWORD,
  payload,
});

// Reducers
const reducers = (state = initialStoreValue, action) => {
  switch (action.type) {
    case UPDATE_LIST_PARAMS:
      console.log(action.payload);
      return { ...state, ...action.payload };
    case UPDATE_SEARCH_KEYWORD:
      console.log(action.payload);
      return { ...state, s: action.payload };
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
