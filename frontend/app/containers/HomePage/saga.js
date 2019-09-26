import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import config from 'config';
import { toast } from 'react-toastify';
import { FETCH_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK } from './constants';
import { setTasks } from './actions';
import { makeSelectUserDetails } from './selectors';

export function* getTasks() {
  const userDetails = yield select(makeSelectUserDetails());
  const requestURL = `${config.apiRoot}/tasks?user_id=${userDetails.userId}`;
  try {
    const resp = yield call(request, requestURL);
    yield put(setTasks(resp.data));
  } catch (err) {
    yield put(setTasks([]));
  }
}

export function* addTasks(data) {
  const { title, description, date } = data;
  const userDetails = yield select(makeSelectUserDetails());
  const requestURL = `${config.apiRoot}/tasks`;
  const option = {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      deadline: date,
      user_id: userDetails.userId,
    }),
  };

  try {
    const resp = yield call(request, requestURL, option);
    toast.success(resp.message);
  } catch (err) {
    toast.error(err.message);
    console.log(err);
  }
}

export function* editTasks(data) {
  const { id, name, description, date } = data;
  const requestURL = `${config.apiRoot}/tasks/${id}`;
  const option = {
    method: 'PUT',
    body: JSON.stringify({
      title: name,
      description,
      deadline: date,
    }),
  };

  try {
    const resp = yield call(request, requestURL, option);
    toast.success(resp.message);
  } catch (err) {
    toast.error(err.message);
    console.log(err);
  }
}

export function* deleteTasks(data) {
  const { id } = data;
  const requestURL = `${config.apiRoot}/tasks/${id}`;
  const option = {
    method: 'DELETE',
  };

  try {
    const resp = yield call(request, requestURL, option);
    toast.success(resp.message);
  } catch (err) {
    toast.error(err.message);
    console.log(err);
  }
}

export default function* githubData() {
  yield takeLatest(FETCH_TASKS, getTasks);
  yield takeLatest(ADD_TASK, addTasks);
  yield takeLatest(EDIT_TASK, editTasks);
  yield takeLatest(DELETE_TASK, deleteTasks);
}
