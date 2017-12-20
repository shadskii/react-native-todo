import React, { Component } from 'react';
import { Container, Header, Content, Item, Button, Input, Text } from 'native-base';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    clearText = () => {
        this._textInput.setNativeProps({ text: '' });
    }

    render() {
        dispatch = this.props.dispatch;
        return (
            <Item>
                <Input
                    ref={component => this._textInput = component}
                    placeholder="Remind me to"
                    onChangeText={(text) => this.setState({ text })} />

                <Button onPress={() => {
                    dispatch(addTodo(this.state.text));
                    this.clearText();
                }} >
                    <Text>Add</Text>
                </Button>
            </Item>
        );
    }
}
add = connect()(AddTodo);
export default add;