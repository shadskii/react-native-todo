import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListItem, CheckBox, Left, Body, SwipeRow, Button, Icon, Content, Item } from 'native-base';


const ToDo = ({ onClick, completed, text }) => (
    <SwipeRow
        icon
        onPress={onClick}
        rightOpenValue={-100}
        stopRightSwipe={-75}
        disableRightSwipe={true}
        body={
            <ListItem
                icon
                onPress={onClick}
            >
                <Icon name={completed ? 'checkbox' : 'square'} style={{ fontSize: 40, color: 'red' }} />
                <Text
                    onPress={onClick}
                    style={{
                        textDecorationLine: completed ? 'line-through' : 'none'
                    }}
                >
                    {"  " + text}
                </Text>
            </ListItem>
        }
        right={
            < Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
            </Button >
        } />
)

ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
export default ToDo;