import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper, Select, InputLabel, MenuItem } from '@material-ui/core';
import pageStyles from './css';
import { createEmployee } from '../../actions/employees';




const Form = () => {


  const [employeeData, setEmployeeData] = useState({ name: '', dateOfBirth: '', gender: '', salary: '', speciality: ''});
//   const employee = useSelector((state) => (currentId ? state.employees.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = pageStyles();

//   useEffect(() => {
//     if (employee) setEmployeeData(employee);
//   }, [employee]);

 
  const clear = () => {
    // setCurrentId(0);
    setEmployeeData({ name: '', dateOfBirth: '', gender: '', salary: '', speciality: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      dispatch(createEmployee(employeeData));
    //   clear();
    //   dispatch(updateEmployee(currentId, employeeData));
    //   clear();
  };

    return (
            <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a New Employee</Typography>
        <TextField name="name" variant="outlined" label="name" fullWidth value={employeeData.name} onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })} />
        <TextField name="title" variant="outlined" label="Date Of birth" fullWidth value={employeeData.dateOfBirth} onChange={(e) => setEmployeeData({ ...employeeData, dateOfBirth: e.target.value })} />  
        <InputLabel id="gender-outlined-label">Gender</InputLabel>
        <Select
          labelId="gender-outlined-label"
          id="demo-simple-select"
          variant="outlined"
          fullWidth
         value={employeeData.gender}
         onChange={(e) => setEmployeeData({ ...employeeData, gender: e.target.value })}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>

        <TextField name="Salary" variant="outlined" label="Salary" fullWidth value={employeeData.salary} onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })} />
        <TextField name="speciality" variant="outlined" label="speciality (coma separated)" fullWidth value={employeeData.speciality} onChange={(e) => setEmployeeData({ ...employeeData, speciality: e.target.value.split(',') })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    )
}

export default Form;