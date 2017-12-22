import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import { List, Container, Header, Content, ListItem, Text } from 'native-base';
import ToDo from './ToDo';

export const ToDoList = ({ todos, onTodoClickToggle, onTodoClickDelete }) => (
    <List>
        {todos.map(todo => {
            return <ToDo
                key={todo.id}
                {...todo}
                onClickToggle={() => onTodoClickToggle(todo.id)}
                onClickDelete={() => onTodoClickDelete(todo.id)}
            />
        })}
    </List>
);

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
    onTodoClickToggle: PropTypes.func.isRequired,
    onTodoClickDelete: PropTypes.func.isRequired
}