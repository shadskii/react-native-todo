import React, { Component } from 'react';
import { Container, Header, Content, Item, Button, Input, Text, Icon } from 'native-base';
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
        this.setState({ text: '' })
    }

    render() {
        dispatch = this.props.dispatch;
        return (
            <Item>
                <Input
                    ref={component => this._textInput = component}
                    placeholder="Remind me to"
                    onChangeText={(input) => this.setState({ text: input })} />

                <Button
                    disabled={this.state.text.length < 1}
                    onPress={() => {
                        dispatch(addTodo(this.state.text));
                        this.clearText();
                    }} >
                    <Icon name='add' />
                </Button>
            </Item>
        );
    }
}
add = connect()(AddTodo);
export default add;