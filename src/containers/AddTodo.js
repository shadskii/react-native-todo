import React, { Component } from 'react';
import { Container, Header, Content, Item, Button, Input, Text } from 'native-base';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    return (
        // <Container>

        <Item>
            {/* <Input placeholder="Add To Do" onSubmit />
                 */}
            <Button onPress={() => dispatch(addTodo("hello world"))} >
                <Text>Hello</Text>
            </Button>
        </Item>

        // </Container>
    );

}
AddTodo = connect()(AddTodo);
export default AddTodo;