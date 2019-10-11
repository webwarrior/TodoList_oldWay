/**
 * Sample React Native App with TodoList
 * https://github.com/webwarrior/TodoList_oldWay
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Keyboard,
  Platform,
} from 'react-native';
 
import TodoList from './app/todolist';
import Header from './app/components/Header';

import styles from './app/components/styles';

const isAndroid = Platform.OS == "android";

export default class App extends React.Component {
//const App: () => React$Node = () => {
  state = {
    viewPadding: 10,
  }
  
  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + this.state.viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: this.state.viewPadding })
    );
  }

  render() {
    
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <TodoList viewPadding={this.state.viewPadding} isAndroid={isAndroid}></TodoList>
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  };
};


//export default App;
