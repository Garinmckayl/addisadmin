import axios from 'axios';

const url = 'https://5000-bf17a97b-f87e-4619-9a1f-f303216ceada.ws-eu01.gitpod.io/employees';

export const fetchEmployees = () => axios.get(url);
export const createEmployee = (newEmployee) => axios.post(url, newEmployee);
export const updateEmployee = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteEmployee = (id) => axios.delete(`${url}/${id}`);