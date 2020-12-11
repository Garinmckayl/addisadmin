import axios from 'axios';

const url = 'https://addisadmin.herokuapp.com/employees';

export const fetchEmployees = () => axios.get(url);
export const createEmployee = (newEmployee) => axios.post(url, newEmployee);
export const updateEmployee = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteEmployee = (id) => axios.delete(`${url}/${id}`);