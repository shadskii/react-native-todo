import React from 'react';
import { FlatList, View } from 'react-native';
import { List, Container, Header, Content, ListItem, Text } from 'native-base';
import ToDo from './ToDo';

export const ToDoList = ({ todos, onTodoClick }) => (

    <List>
        {todos.map(todo => {
            return <ToDo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        })}
    </List>

);