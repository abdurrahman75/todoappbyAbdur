import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor:'#283593',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    color:'white'
  },
  
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.common.black,
    },
  },
});


const Todo = props => (
    
    <TableRow style={{backgroundColor:"#9dc3f9"}}>
        <TableCell>{props.todo.todo_description}</TableCell>
        <TableCell align="right">{props.todo.todo_responsible}</TableCell>
        <TableCell align="right">{props.todo.todo_priority}</TableCell>
        <TableCell align="right">
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </TableCell>
    </TableRow>

)

class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() { 
         const { classes } = this.props;
         return (
            <div>
                <Grid item xs={12} md={12} >
                <h3 align="center" style={{color:"#ffffff"}}>Todos List</h3>
                 
                 <Paper style={{ overflowX: "auto" }} >
                 <Table style={{ minWidth: "340px" }} >
                
                 <TableHead>
               <TableRow >
                 <CustomTableCell>Description</CustomTableCell>
                 <CustomTableCell align="right">Responsible</CustomTableCell>
                 <CustomTableCell align="right">Priority</CustomTableCell>
                 <CustomTableCell align="right">Action</CustomTableCell>
               </TableRow>
            </TableHead>
             <TableBody>
               { this.todoList() }
             </TableBody>
           </Table>
           
         </Paper>
         </Grid>
     </div>
        );
    }
}
TodosList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodosList);