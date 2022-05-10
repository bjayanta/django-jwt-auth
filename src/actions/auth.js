import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    RESET_REGISTER_SUCCESS,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_SUCCESS, 
    LOAD_USER_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING
} from "./types";

export const register = (
    first_name, 
    last_name, 
    username, 
    password, 
    re_password
) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await fetch('/api/account/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name, 
                last_name, 
                username, 
                password, 
                re_password
            })
        });

        if(res.status === 201) {
            dispatch({
                type: REGISTER_SUCCESS
            });
        } else {
            dispatch({
                type: REGISTER_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL
        });
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};

export const reset_register_success = () => dispatch => {
    dispatch({
        type: RESET_REGISTER_SUCCESS 
    });
};

export const login = (username, password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await fetch('/api/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, 
                password
            })
        });

        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS
            });

            dispatch(load_user());
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        });
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};

export const logout = () => async dispatch => {
    try {
        const res = await fetch('/api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        });

        if(res.status === 200) {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL
        });
    }
}

export const load_user = () => async dispatch => {
    try {
        const res = await fetch('/api/account/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if(res.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: LOAD_USER_FAIL
            });
        }
    } catch (error) {
        
    }
}

export const check_auth_status = () => async dispatch => {
    try {
        const res = await fetch('/api/account/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if(res.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCCESS
            });

            dispatch(load_user());
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
}