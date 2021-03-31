// Reducer 1 for contacts app

const userInfo = (state, action) => {
  switch (action.type) {
    case "UPDATE_INFO":
      return [...state, action.name];
    case "ADD_CONTACT":
      return [...state, action.contact];
    default:
      return state;
  }
};

const loadingComplete = (state, action) => {
  if (action.type == "LOADING_COMPLETE") {
    return [...state, action.status];
  }
};
const rootReducer = combineReducers({
  loadingComplete,
  userInfo,
});

export default rootReducer;
