import express from 'express';

import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.js';

const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
router.get('/:id', getEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;