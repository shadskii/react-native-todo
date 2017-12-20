import React from 'react';
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

export default ToDo;