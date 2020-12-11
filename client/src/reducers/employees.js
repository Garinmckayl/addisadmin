// import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import { createAsyncTypes } from '../Utilities'
export const GET_EMPLOYEE_ASYNC = createAsyncTypes('GET_EMPLOYEE')

export default (employees = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case GET_EMPLOYEE_ASYNC.CREATE:
      return [...employees, action.payload];
    case GET_EMPLOYEE_ASYNC.UPDATE:
      return employees.map((employee) => (employee._id === action.payload._id ? action.payload : employee));
    case GET_EMPLOYEE_ASYNC.DELETE:
      return employees.filter((employee) => employee._id !== action.payload);
    default:
      return employees;
  }
};