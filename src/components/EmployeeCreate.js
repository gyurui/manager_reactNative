import React,{Component} from 'react'
import { connect } from 'react-redux'
import {View, Text, Picker} from 'react-native'
import { employeeUpdate, employeeCreate, employeeClear } from '../actions'

import { Card, CardSection, Button, Input } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.employeeClear()
    }

    onButtonPress = () => {
         const {name, phone, shift} = this.props

         this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
    }

    render() {
        return (
            <Card>
                <EmployeeForm></EmployeeForm>
                <CardSection> 
                    <Button onPress={this.onButtonPress}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20
    }
  };

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
  
    return { name, phone, shift };
  };
  
export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate, employeeClear
  })(EmployeeCreate);
  

