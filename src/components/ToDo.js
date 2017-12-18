import React from 'react';
import { Text, ListItem } from 'native-base';


const ToDo = ({ onClick, completed, text }) => (
    <ListItem>

        <Text
            onPress={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </Text>
    </ListItem>
)

export default ToDo;