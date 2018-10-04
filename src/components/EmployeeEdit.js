import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave, employeeDelete} from '../actions'
import { Card, CardSection, Button, Confirm } from './common'
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false}

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
          });
    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress = () => {
        const { phone, shift } = this.props
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;

        this.props.employeeDelete({ uid });
    
      }
    
      onDecline() {
        this.setState({ showModal: false });
      }

    render() {
        console.log(this.props.name)
        return ( 
            <Card>
                <EmployeeForm></EmployeeForm>
                <CardSection>
                    <Button onPress={ this.onButtonPress }>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={ this.onTextPress } >
                        Send Text message
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                     Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                        Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateProps = (state) => {
    const {name, phone, shift} = state.employeeForm
    return { name, phone, shift }
}

export default connect(mapStateProps, {employeeUpdate, employeeSave, employeeDelete} )( EmployeeEdit)