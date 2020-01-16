import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FormRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, first, last } = this.props;
        return (
            <View style={[styles.container,
            first ? styles.first : null,
            last ? styles.last : null
            ]}>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    },
    first: {
        marginTop: 10,
    },
    last: {
        marginBottom: 10,
    }
});