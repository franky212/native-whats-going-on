import React, {Component} from 'react';
import {Alert, Text} from 'react-native';
import firebase from 'firebase';

import {Button, Card, CardSection, Input, Spinner} from './common';

export default class LoginForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };

        this.handleLogIn = this.handleLogIn.bind( this );
    }

    handleLogIn () {
        const {email, password} = this.state;

        this.setState( {error: '', loading: true} );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( this.onLoginSuccess.bind( this ) )
            .catch( () => {
                Alert.alert(
                    'Account Creation',
                    'It looks like that account does not exist! Would you like to create one?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => {
                                this.onLoginFail.bind( this );
                            }
                        },
                        {
                            text: 'Create Account',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword( email, password )
                                    .then( this.onLoginSuccess.bind( this ) )
                                    .catch( this.onLoginFail.bind( this ) )
                            }
                        }
                    ]
                );
            } );
    }

    onLoginFail () {
        this.setState( {
            error: 'Authentication Failed.',
            loading: false
        } );
    }

    onLoginSuccess () {
        this.setState( {
            email: '',
            password: '',
            error: '',
            loading: false
        } );
    }

    renderButton () {
        if ( this.state.loading ) {
            return <Spinner size="small"/>
        }

        return (
            <Button onPress={this.handleLogIn}>
                Log In/Sign Up
            </Button>
        );
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder={'user@gmail.com'}
                        name="email"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState( {email} )}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder={'password'}
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState( {password} )}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};