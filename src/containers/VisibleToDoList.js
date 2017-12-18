import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { ToDoList } from '../components/ToDoList';

const getVisibleTodos = (todos) => {
    console.log(todos);
    return todos;
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
}
const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);

export default VisibleToDoList;