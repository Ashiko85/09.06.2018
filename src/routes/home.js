import React, { PureComponent, Fragment } from 'react';
import Value from './value';
import ShowUsers from '../components/showList.js';
import UsersList from '../components/usersList.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';

class Home extends PureComponent{
    state ={
        userValue: ' ',
        userList: [],
    };

    handleAddUser = () => {
        this.setState({
            userList:[...this.state.userList, this.state.userValue],
            userValue:'',
        })
    };

    userOnChange = (event) => {
        this.setState({
            userValue: event.target.value
        })
    };

    componentDidUpdate(){
        console.log(this.state.userList)
    }

    render(){
        return (
            <Fragment>
                <Header applicationName="Homework 14"/>
                <Menu/>
                <input
                    value = {this.state.userValue}
                    placeholder = "Nazwa Użytkownika"
                    onChange = {this.userOnChange}
                />
                <button onClick = {this.handleAddUser}>Dodaj Użytkownika</button>
                <Value userValue = {this.state.userValue}/>
                <ShowUsers userList= {this.state.userList}/>
                <UsersList userList  = {this.state.userList}/>
                <Footer currentDatde=" "/>

            </Fragment>
        );
    }
}

export default Home;
