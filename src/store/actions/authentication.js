import * as actionTypes from "./actionTypes";
import axiosAuth from "../../Instace/authInstance";
import axiosDb from "../../Instace/realTimedbInstace";

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
export const setName = (name)=>
{
  return {
    type: actionTypes.SET_NAME,
    payload: {
      name: name,
    } 
  };
}
const saveSession = (userName, token, localId,profileName) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
      name: profileName,
    },
  };
};

const saveSignUp = (userName, token, localId,name) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
      name: name
    },
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    axiosAuth
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


        console.log(response);

        

        dispatch(getProfileName(userEmail, token, localId,userSession));
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

export const signUp = (authData, onSuccessCallback,profileName) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    axiosAuth
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
        const profile=
        {
          email:authData.email,
          name: profileName
        }
        dispatch(createProfile(profile));
        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSignUp(userEmail, token, localId,profileName));
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
          userSession.localId,
          userSession.name
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

const startProfileLoading = () => {
  return {
    type: actionTypes.START_LOADING_PROFILE,
  };
};

const endProfileLoading  = () => {
  return {
    type: actionTypes.END_LOADING_PROFILE,
  };
};

export const createProfile = (post) => {
  return (dispatch) => {
    dispatch(startProfileLoading(0));

    axiosDb
      .post("/profile.json", post)
      .then((response) => {
        console.log(response);
        dispatch(endProfileLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(endProfileLoading());
      });
  };
};
export const getProfileName = (email,token,localId,userSession) => {
  return (dispatch) => {
    dispatch(startProfileLoading(0));

    axiosDb
      .get('/profile.json?orderBy="email"&equalTo="'+email+'"')
      .then((response) => {
        dispatch(saveSession(email, token, localId,response.data[Object.keys(response.data)[0]].name));
        console.log(userSession);
        userSession={token: userSession.token,
          userEmail: userSession.userEmail,
          localId: userSession.localId,
          name: response.data[Object.keys(response.data)[0]].name};
        userSession = JSON.stringify(userSession);
        localStorage.setItem("userSession", userSession);
      })
      .catch((error) => {
        console.error(error);
      })
  };
};