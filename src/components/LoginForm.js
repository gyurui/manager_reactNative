import React, {Component} from 'react';
import {connect} from 'react-redux'
import {emailChange} from '../actions'
import {Card, CardSection, Input, Button} from './common'


export class LoginForm extends Component {
    onEmailChange(text) {

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    >
                    </Input>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                    >
                    </Input>
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

