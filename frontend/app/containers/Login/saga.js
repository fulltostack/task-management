import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import config from 'config';
import { toast } from 'react-toastify';

import { signupSuccess } from './actions';
import { CALL_SIGNUP } from './constants';

export function* signUp(data) {
  const { username } = data;
  const requestURL = `${config.apiRoot}/users`;
  const option = {
    method: 'POST',
    body: JSON.stringify({ user_name: username }),
  };

  try {
    const response = yield call(request, requestURL, option);
    yield put(signupSuccess(response.data, username));
  } catch (err) {
    toast.error(err.message);
    yield put(signupSuccess('', ''));
  }
}

export default function* githubData() {
  yield takeLatest(CALL_SIGNUP, signUp);
}
