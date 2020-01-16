import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoForm from '../src/components/TodoForm'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'


const store = createStore(rootReducer);

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});