import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  isUserLoggedIn: false,
  name:"",
  userLoggedIn: {
    userName: "",
    idToken: "",
    localId: "",
  },
  loadingAuth: false,
  error:''
};

const login = (state, action) => {
  console.log("aca",action.payload.name);
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: action.payload.userName,
      idToken: action.payload.idToken,
      localId: action.payload.localId,
    },
    name: action.payload.name
  });
  
};


const signUp = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: action.payload.userName,
      idToken: action.payload.idToken,
      localId: action.payload.localId,
    },
    name:action.payload.name,
  });
};

const createProfile = (state, action) => {
  return updateObject(state, {
    userLoggedIn: {
      name:"alberto",
    },
  });
};

const startLoading = (state, action) => {
  return updateObject(state, { loadingAuth: true });
};

const endLoading = (state, action) => {
  return updateObject(state, { loadingAuth: false });
};

const logOut = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: false,
    userLoggedIn: {
      userName: "",
      idToken: "",
      localId: "",
    },
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action);
    case actionTypes.SIGN_UP:
      return signUp(state, action);
    case actionTypes.LOG_OUT:
      return logOut(state, action);
    case actionTypes.START_LOADING_AUTH:
      return startLoading(state, action);
    case actionTypes.END_LOADING_AUTH:
      return endLoading(state, action);
    case actionTypes.CREATE_PROFILE:
      return createProfile(state,action);
    case "ERROR":
      return updateObject(state,{error: action.payload.error})
    default:
      return state;
  }
};

export default reducer;
