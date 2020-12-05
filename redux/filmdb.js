import { combineReducers, createStore } from 'redux';

// ? Klo menurut pendapatku si, pakai redux overkill deh(?)

const initialStoreValue = {
  s: '',
  page: 1,
};

// Actions
const UPDATE_LIST_PARAMS = 'UPDATE_LIST_PARAMS';
const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH_KEYWORD';
const UPDATE_PAGE = 'UPDATE_PAGE';

// Action Creator
export const updateListParams = (payload) => ({
  type: UPDATE_LIST_PARAMS,
  payload,
});

export const updateSearchKeyword = (payload) => ({
  type: UPDATE_SEARCH_KEYWORD,
  payload,
});

export const updatePage = (payload) => ({
  type: UPDATE_PAGE,
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
    case UPDATE_PAGE:
      return { ...state, page: action.payload };
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
