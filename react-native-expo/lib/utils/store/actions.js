//actions.js
//specify the actions in the redux store


// category related actions
export const changeCategoryAction = (category) => ({
  type: "CHANGE_CATEGORY",
  payload: category,
});

// image_list related action
export const setImagesListAction = (list) => ({
  type: "SET_IMAGES_LIST",
  payload: list,
});

// paiging related actions
export const setPageAction = (value) => ({
  type: "SET_PAGE",
  payload: value,
});

export const setNumOfItemsInPageAction = (value) => ({
  type: "SET_ITEMS_IN_PAGE",
  payload:  value,
});

export const setMaxPageAction = (value) => ({
  type: "SET_MAX_PAGE",
  payload:  value,
});
