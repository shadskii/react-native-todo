import React from 'react';
import { Footer, FooterTab } from 'native-base';
import FilterButton from '../containers/FilterButton';

const AppFooter = () => {
    return (
        <Footer>
            <FooterTab>
                <FilterButton
                    name='All'
                    icon='list-box'
                    filter="SHOW_ALL" />
                <FilterButton
                    name='Active'
                    icon='square'
                    filter="SHOW_ACTIVE" />
                <FilterButton
                    name='Completed'
                    icon='checkbox'
                    filter="SHOW_COMPLETED" />
            </FooterTab>
        </Footer>
    );
}

export default AppFooter;