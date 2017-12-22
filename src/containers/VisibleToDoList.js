import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import { ToDoList } from '../components/ToDoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClickDelete: id => {
            dispatch(removeTodo(id))
        },
        onTodoClickToggle: id => {
            dispatch(toggleTodo(id));
        }
    }
}
const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);

export default VisibleToDoList;