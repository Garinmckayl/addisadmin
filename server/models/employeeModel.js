import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    name: String,
    dateOfBirth: Date,
    gender: String,
    speciality: [String],
    salary: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var employeeModel = mongoose.model('EmployeeData', employeeSchema);

export default employeeModel;