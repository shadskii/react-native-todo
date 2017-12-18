import react from 'react';
import { Text } from 'native-base';


const ToDo = ({ onClick, completed, text }) => (
    <Text
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none';
        }}
    >
        {text}
    </Text>
)

export default ToDo;