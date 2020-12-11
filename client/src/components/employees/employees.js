import react from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Employee from './employee/employee';
import { useSelector } from 'react-redux';
import pageStyles from './css';

const Employees = () => {
const employees = useSelector((state) => state.employees);
alert(employees)

console.log(employees);
const classes = pageStyles();

    return (
       !employees.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {employees.map((employee) => (
          <Grid key={employee._id} item xs={12} sm={6} md={6}>
            <Employee employee={employee}/>
            {/* <Employee employee={employee} />
            <Employee employee={employee} />
            <Employee employee={employee} /> */}
          </Grid>
       ))} 
      </Grid>
       )
    )
}

export default Employees;