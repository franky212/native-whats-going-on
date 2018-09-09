/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner} from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
    constructor ( props ) {
        super( props );
        this.state = {
            loggedIn: null
        }
    }

    componentWillMount () {
        firebase.initializeApp( {
            apiKey: 'AIzaSyCP46KiwggksitpwsS822uCPaZlelY_oCY',
            authDomain: 'whats-going-on-1512239857272.firebaseapp.com',
            databaseURL: 'https://whats-going-on-1512239857272.firebaseio.com',
            projectId: 'whats-going-on-1512239857272',
            storageBucket: 'whats-going-on-1512239857272.appspot.com',
            messagingSenderId: '122507501025'
        } );

        firebase.auth().onAuthStateChanged( user => {
            if ( user ) {
                this.setState( {loggedIn: true} );
            }
            else {
                this.setState( {loggedIn: false} );
            }
        } );
    }

    renderContent () {
        switch ( this.state.loggedIn ) {
            case true:
                return (
                    <AlbumList/>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>
        }
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'What\'s Going On'}/>
                {this.renderContent()}
            </View>
        );
    }
};
