import _ from 'lodash';
import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import {employeesFetch} from '../actions'
import {connect} from 'react-redux'

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    
        this.createDataSource(this.props);
      }
    
      componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
    
        this.createDataSource(nextProps);
      }
    
      createDataSource({ employees }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(employees);
      }
    

    render() {
        console.log(this)
        return (
            <View>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
            </View>
        )
    }
} 

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
    });
  
    return { employees };
  };

export default connect (mapStateToProps, { employeesFetch })(EmployeeList);