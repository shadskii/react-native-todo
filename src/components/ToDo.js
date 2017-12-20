import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListItem, CheckBox, Left, Body } from 'native-base';


const ToDo = ({ onClick, completed, text }) => (
    <ListItem icon
        onPress={onClick}>
        <Left>
            <CheckBox checked={completed} />
        </Left>
        <Body>
            <Text
                style={{
                    textDecorationLine: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </Text>
        </Body>
    </ListItem>
)

ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
export default ToDo;