import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, Alert } from 'react-native';
import FormRow from '../components/FormRow'
import FireBase from '../shared/firebase'

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false
        }
    }

    renderButton() {

        if (this.state.isLoading) {
            return <ActivityIndicator />
        }

        return (<View>
            <Button title="Entrar" onPress={() => this.tryLogin()} />
        </View>)
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });

    }

    tryLogin() {


        const loginUserSuccess = user =>
        {
            this.setState({ message: 'Sucesso!' });
            console.log(user);
            this.props.navigation.navigate('Main')
        }

        this.setState({ isLoading: true, message: '' });

        console.log(this.state);
        const { mail, password } = this.state;

        FireBase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(loginUserSuccess)
            .catch(error => {
                this.setState({ message: error.message });
                if (error.code == 'auth/user-not-found') {
                    Alert.alert('Deu pau', error.message,
                        [
                            {
                                text: 'Não',
                                onPress: () => { console.log('Não') }
                            },
                            {
                                text: 'Sim',
                                onPress: () => {
                                    FireBase.auth().createUserWithEmailAndPassword(mail, password)
                                        .then(loginUserSuccess)
                                        .catch(error => {
                                            Alert.alert('erro', error.message);
                                        })
                                }

                            }
                        ],
                        {
                            cancelable: false
                        }
                    )
                }
                console.log(error);
            })
            .then(() => this.setState({ isLoading: false }))
    }

    renderMessage() {
        const { message } = this.state;
        if (!message) {
            return null;
        }

        return (<View>
            <Text>{message}</Text>
        </View>)
    }

    render() {
        return (
            <View>
                <FormRow first>
                    <TextInput
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
                {this.renderButton()}
                {this.renderMessage()}
            </View>
        )
    }
}

