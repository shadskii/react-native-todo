import React from 'react';
import { FlatList, View } from 'react-native';
import { List, Container, Header, Content, ListItem, Text } from 'native-base';
import ToDo from './ToDo';

export const ToDoList = ({ todos }) => (

    // <FlatList
    //     data={todos}
    //     renderItem={({ todo }) => <ToDo key={todo.id} {...todo} onClick={() => onToDoClick(todo.id)} />}
    // />

    <List>
        <ListItem><Text>asddd</Text></ListItem>
        {todos.map(todo => {

            return <ToDo key={todo.id} {...todo} />
            // return <ListItem><Text>{todo.text}</Text></ListItem>
        })}
        {console.log("hello")}
    </List>

);