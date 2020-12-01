import express from 'express';
import mongoose from 'mongoose';

import employeeModel from '../models/employeeModel.js';

const router = express.Router();

export const getEmployees = async (req, res) => { 
    try {
        const employees = await employeeModel.find();
                
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEmployee = async (req, res) => { 
    const { id } = req.params;

    try {
        const Employee = await employeeModel.findById(id);
        
        res.status(200).json(Employee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEmployee = async (req, res) => {
    const { name, dateOfBirth, gender, salary, speciality } = req.body;

    const newEmployee = new employeeModel({ name, dateOfBirth, gender, salary, speciality })

    try {
        await newEmployee.save();

        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Employee with id: ${id}`);

    const updatedEmployee = { creator, title, message, tags, selectedFile, _id: id };

    await employeeModel.findByIdAndUpdate(id, updatedEmployee, { new: true });

    res.json(updatedEmployee);
}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Employee with id: ${id}`);

    await EmployeeMessage.findByIdAndRemove(id);

    res.json({ message: "Employee deleted successfully." });
}

export const likeEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Employee with id: ${id}`);
    
    const Employee = await EmployeeMessage.findById(id);

    const updatedEmployee = await EmployeeMessage.findByIdAndUpdate(id, { likeCount: Employee.likeCount + 1 }, { new: true });
    
    res.json(updatedEmployee);
}


export default router;