
// initial state for the Redux store.
const initialState = {
  category: "",
  images_list: [],
  page: 1,
  items_in_page: 9,
  maxPage: 1
};

// reducer function.
function reducer(state = initialState, action) {
  // check if the actionHandlers have an appropriate handler for the current action
  let handler = actionHandlers[action.type];
  if (handler) {//if so,
    let updates = handler(state, action); // get update from handler
    return { ...state, ...updates }; //create new state, applying on it the new updates
  } else return state;
}

// acollection of handlers mappped by action
// every handler must returns an object, contains
// only the updates it want to do in the store
const actionHandlers = {
  CHANGE_CATEGORY: (state, { payload }) => {
    return { category: payload };
  },
  SET_IMAGES_LIST: (state, { payload }) => {
    return { images_list: payload };
  },
  SET_PAGE: (state, { payload }) => {
    if (payload >= 1 && payload <= state.maxPage) return { page: payload };
    else return {};
  },
  SET_MAX_PAGE: (state, { payload }) => {
    return { maxPage: payload };
  },
  SET_ITEMS_IN_PAGE: (state, { payload }) => {
    if (payload >= 0) return { items_in_page: payload };
    else return {};
  },
};

export default reducer;
