import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Input from './Input'
import { addTodo } from '../actions'
import { connect } from 'react-redux';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            text: ''
        };
    }
    onPress() {
        this.props.dispatchAddTodo(this.state.text)       
    }
    onChangeText(text) {
        this.setState({
            text
        });
    }
    render() {
        const { text } = this.state;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text} />
                </View>
                <View>
                    <Button
                        style={styles.buttonContainer}
                        title="Add"
                        onPress={() => this.onPress()} />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatchAddTodo => {
    return {
        dispatchAddTodo: text => dispatchAddTodo(addTodo(text))
    }
}

export default connect(null,mapDispatchToProps)(TodoForm)

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
})