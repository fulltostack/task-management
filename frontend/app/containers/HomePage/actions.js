import {
  FETCH_TASKS,
  LOAD_TASKS,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from './constants';

/**
 * Call Fetch request
 *
 * @param  {string}
 *
 * @return {object} An action object with a type of FETCH_TASKS
 */
export function fetchTasks() {
  return {
    type: FETCH_TASKS,
  };
}

/**
 * FetchTasks response
 *
 * @param  {string} id, username
 *
 * @return {object} An action object with a type of SIGNUP_SUCCESS
 */
export function setTasks(tasks) {
  return {
    type: LOAD_TASKS,
    tasks,
  };
}

/**
 * Add Task response
 *
 * @param  {string} title, descrption, date
 *
 * @return {object} An action object with a type of SIGNUP_SUCCESS
 */
export const addTask = (title, description, date) => ({
  type: ADD_TASK,
  title,
  description,
  date,
});

/**
 * Edit task response
 *
 * @param  {string} id, title, description , date
 *
 * @return {object} An action object with a type of SIGNUP_SUCCESS
 */
export const editTask = (id, name, description, date) => ({
  type: EDIT_TASK,
  name,
  description,
  date,
  id,
});

/**
 * Edit task response
 *
 * @param  {string} id
 *
 * @return {object} An action object with a type of SIGNUP_SUCCESS
 */
export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
});
