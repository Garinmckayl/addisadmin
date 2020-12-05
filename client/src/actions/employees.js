// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import { createAction } from '../Utilities'

import * as api from '../api/index.js';

export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployees();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.createEmployee(employee);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEmployee = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateEmployee(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await await api.deleteEmployee(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};