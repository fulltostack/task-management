import { CALL_SIGNUP, SIGNUP_SUCCESS } from './constants';

/**
 * Call signup request
 *
 * @param  {string} username
 *
 * @return {object} An action object with a type of CALL_SIGNUP
 */
export function signUpUser(username) {
  return {
    type: CALL_SIGNUP,
    username,
  };
}

/**
 * Signup response
 *
 * @param  {string} id, username
 *
 * @return {object} An action object with a type of SIGNUP_SUCCESS
 */
export function signupSuccess(id, username) {
  return {
    type: SIGNUP_SUCCESS,
    id,
    username,
  };
}
