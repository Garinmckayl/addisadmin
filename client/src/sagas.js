/**
* employee Sagas
*/

import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as api from './api/index.js';
// import * as actions from './actions/employees';


const fetchEmployees = api.fetchEmployees();
const delay = (ms) => new Promise(res => setTimeout(res, ms))



function* getEmployeeData() {
    console.log('Employee data')
  try {
    const employees = yield call(fetchEmployees)
    yield delay(1000)
    yield put({ type: 'FETCH_ALL' })
  } catch (e) {
    console.log(e)
  }
}

export function* helloSaga() {
  console.log('Hello world Sagas!')
}


//watcher saga
export default function* () {
  yield takeEvery("GET_EMPLOYEE_ASYNC", getEmployeeData);
}


//  export default function* () {
//   yield all([
//     takeLatest(types.GET_EMPLOYEE_ASYNC.FETCH_ALL, fetchEmployees)
//   ])
// }