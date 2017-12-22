import React from 'react';
import { FlatList, View } from 'react-native';
import { List, Container, Header, Content, ListItem, Text } from 'native-base';
import ToDo from './ToDo';

export const ToDoList = ({ todos, onTodoClickToggle, onTodoClickDelete }) => (

    <List>
        {todos.map(todo => {
            return <ToDo key={todo.id} {...todo} onClickToggle={() => onTodoClickToggle(todo.id)} onClickDelete={() => onTodoClickDelete(todo.id)} />
        })}
    </List>

);