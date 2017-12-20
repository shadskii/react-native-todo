import React from 'react';
import { Text, ListItem, CheckBox } from 'native-base';


const ToDo = ({ onClick, completed, text }) => (
    <ListItem
        onPress={onClick}>
        <CheckBox checked={completed} />
        <Text
            style={{
                textDecorationLine: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </Text>
    </ListItem>
)

export default ToDo;