import React from 'react';
import { Button, Icon, Text } from 'native-base';

const IconButton = ({ isActive, name, icon, onClick }) => {
    console.log(isActive);
    return (
        <Button
            vertical
            active={isActive}
            onPress={onClick}
        >
            <Icon name={icon} />
            <Text>{name}</Text>
        </Button >
    );
};

export default IconButton;