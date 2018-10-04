import {
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUcCESS, EMPLOYEE_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //key interpretation 
      //like const newStet = {}; newState[action.payload.prop] = action.payload.value
      // { ...state, ...newState }
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE
    case EMPLOYEE_SAVE_SUcCESS:
      return INITIAL_STATE
    case EMPLOYEE_CLEAR:
      return INITIAL_STATE
    default:
      return state;
  }
};
