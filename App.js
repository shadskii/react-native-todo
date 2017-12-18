import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from "expo";
import AppShell from './src/components/AppShell';
import todoApp from './src/reducers';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(todoApp);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    let content = null;
    if (!this.state.isReady) {
      content = <Expo.AppLoading />;
    } else {
      content = <AppShell />
    }
    return (
      <Provider store={store}>
        {content}
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
