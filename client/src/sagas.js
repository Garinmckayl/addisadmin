/**
* employee Sagas
*/

import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api/index.js';
import * as actions from './actions/employees';


const fetchEmployees = api.fetchEmployees();



function* getEmployeeData() {
  try {
    const employees = yield call(fetchEmployees)
    yield put(actions.success(employees.items))
  } catch (e) {
    console.log(e)
    yield put(actions.error(e))
  }
}


export default function* () {
  yield takeEvery("GET_EMPLOYEE_ASYNC", getEmployeeData);
}


 export default function* () {
  yield all([
    takeLatest(types.GET_EMPLOYEE_ASYNC.FETCH_ALL, fetchEmployees)
  ])
}