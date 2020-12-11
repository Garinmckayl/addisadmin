import react from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../../actions/employees';
import pageStyles from './css';

const Employee = ( {employee} ) => {
   const dispatch = useDispatch();
    const classes = pageStyles();

    return (
        <Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://picsum.photos/200'} />
      <div className={classes.overlay}>
    <Typography variant="h6">{employee.name}</Typography>
        <Typography variant="body2">Gender: {employee.gender}</Typography>
      </div>
      <div className={classes.overlay2}>
        {/* <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(employee._id)}><MoreHorizIcon fontSize="default" /></Button> */}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">Speciality: {employee.speciality}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">Name: {employee.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Salery: {employee.salary}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteEmployee(employee._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
    )
}

export default Employee;