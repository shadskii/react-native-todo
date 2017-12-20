import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import IconButton from '../components/IconButton';

const mapStateToProps = (state, ownProps) => {
    console.log(state.visibilityFilter);
    return {
        isActive: ownProps.filter === state.visibilityFilter,
        name: ownProps.name,
        icon: ownProps.icon
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(IconButton);

export default FilterButton;