import React from 'react'
import { Router, Scene, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate';
 
const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm}  title='Please Login' initial></Scene>
                </Scene>
                <Scene key='main'>
                    <Scene key='employeeList'
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                     component={EmployeeList} title ='Employee'></Scene>
                    <Scene key='employeeDetail' component={EmployeeList} title ='EmployeeDetail'></Scene>
                    <Scene key='employeeCreate' component={EmployeeCreate} title='EmployeeCreate'></Scene>
                </Scene>
            </Scene>
        </Router>
    )
}
 
export default RouterComponent;