import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class AppShell extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>My Todo</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}