import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "../actions/types";


const INITAL_STATE = { email: '', password: '', user: null}

export default (state = INITAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state
    }
}