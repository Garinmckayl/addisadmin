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
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      <div className={classes.overlay}>
        <Typography variant="h6">Hello</Typography>
        <Typography variant="body2">23/12</Typography>
      </div>
      <div className={classes.overlay2}>
        {/* <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(employee._id)}><MoreHorizIcon fontSize="default" /></Button> */}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">#css</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">NTNAE</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">FGER</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteEmployee(employee._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
    )
}

export default Employee;