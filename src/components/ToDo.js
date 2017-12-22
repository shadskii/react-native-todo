import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListItem, CheckBox, Left, Body, SwipeRow, Button, Icon, Content, Item } from 'native-base';


const ToDo = ({ onClickToggle, onClickDelete, completed, text }) => (
    <SwipeRow
        icon
        onPress={onClickToggle}
        rightOpenValue={-100}
        stopRightSwipe={-75}
        disableRightSwipe={true}
        body={
            <ListItem
                icon
                onPress={onClickToggle}
            >
                <Icon name={completed ? 'checkbox' : 'square'} style={{ fontSize: 40, color: 'blue' }} />
                <Text
                    onPress={onClickToggle}
                    style={{
                        textDecorationLine: completed ? 'line-through' : 'none'
                    }}
                >
                    {"  " + text}
                </Text>
            </ListItem>
        }
        right={
            < Button danger onPress={onClickDelete}>
                <Icon active name="trash" />
            </Button >
        } />
)

ToDo.propTypes = {
    onClickToggle: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
export default ToDo;