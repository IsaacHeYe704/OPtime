import * as actionTypes from "./actionTypes";
import axios from "../../Instace/authInstance";

const API_KEY = "AIzaSyD9p88bcLFVNtfqSdbGXWrVaQWfRysGHKE";

const startAuthLoading = () => {
  return {
    type: actionTypes.START_LOADING_AUTH,
  };
};

const endAuthLoading = () => {
  return {
    type: actionTypes.END_LOADING_AUTH,
  };
};
export const setError = (errorMessage)=>
{
  return {
    type:"ERROR",
    payload: {
      error: errorMessage,
    } 
  };
}
const saveSession = (userName, token, localId) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

const saveSignUp = (userName, token, localId) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    axios
      .post("/accounts:signInWithPassword?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSession(userEmail, token, localId));
        dispatch(endAuthLoading());

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        let errorMessage = error.response.data.error.message;
        dispatch(setError("WRONG CREDENTIALS, PLEASE TRY AGAIN!!"));
        dispatch(endAuthLoading());
      });
  };
};

export const signUp = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    axios
      .post("/accounts:signUp?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSignUp(userEmail, token, localId));
        dispatch(endAuthLoading());

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        let errorMessage = error.response.data.error.message;
        dispatch(setError(errorMessage));
        dispatch(endAuthLoading());
      });
  };
};

export const persistAuthentication = () => {
  return (dispatch) => {
    let userSession = localStorage.getItem("userSession");

    if (!userSession) {
      dispatch(logOut());
    } else {
      userSession = JSON.parse(userSession);

      dispatch(
        saveSession(
          userSession.userEmail,
          userSession.token,
          userSession.localId
        )
      );
    }
  };
};

export const logOut = () => {
  localStorage.setItem("userSession", "");
  return {
    type: actionTypes.LOG_OUT,
  };
};
