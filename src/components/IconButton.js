import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Text } from 'native-base';

const IconButton = ({ isActive, name, icon, onClick }) => {
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

IconButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default IconButton;