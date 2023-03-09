import axios from 'axios';
// import { returnErrors } from "./messages";


import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_ERROR,
    GET_ERRORS
} from "./types";

//CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });

    //Get token from state
    const token = getState().auth.token;
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.get('http://127.0.0.1:8000/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED, 
                payload: res.data
            });
        }).catch(err => {
            //dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
};


//LOGIN USER
export const login = (username, password) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify( {username , password} );
    console.log(body);
    // console.log(username[0]);
    // console.log(password[0]);
    axios.post('http://127.0.0.1:8000/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        })
};

//LOGOUT USER
export const logout = () => (dispatch, getState) => {

    //Get token from state
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
        // console.log(config)
    } else {
        console.log("no token")
    }
    axios.post('http://127.0.0.1:8000/api/auth/logout', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS, 
            });
        }).catch(err => {
            //dispatch(returnErrors(err.response.data, err.response.status));
            console.log(err)
        })
}
