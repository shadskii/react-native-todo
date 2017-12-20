import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content } from 'native-base';
import AddTodo from '../containers/AddTodo';
import AppFooter from './AppFooter';
import VisibleToDoList from '../containers/VisibleToDoList';
export default class AppShell extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>My To Do</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <AddTodo />
                    <VisibleToDoList />
                </Content>
                <AppFooter />
            </Container>
        );
    }
}