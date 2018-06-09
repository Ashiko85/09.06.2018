import React, { PureComponent, Fragment } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';

class Users extends PureComponent{

    state ={
        details: {},
    };

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.userList}?client_id=36924b0cb2cf812e366a&client_secret=1b3afec0e38043e678001c63f72c81fa2d16aee4`)
            .then(response => response.json())
            .then(data => this.setState({
                details: data,
            }));
    }
    componentDidUpdate(){
        console.log(this.state.details)
}


    render() {
        return(

            <Fragment>
                <Header applicationName="Homework 14"/>
                <Menu/>
                <div>
                    {this.state.details.id}
                </div>
                <div>
                {this.state.details.created_at}
                </div>
            <div>
                <img src={this.state.details.avatar_url}></img>
            </div>
                {this.props.match.params.userList}
                <Footer currentDatde=" "/>
            </Fragment>
        )
    }
}

export default Users
