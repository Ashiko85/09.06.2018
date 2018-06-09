import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class UsersList extends PureComponent{



    renderUserList = () => this.props.userList.map((item, index) => <Link key={index} to = {'/users/'+item}><li>{item}</li></Link>);

    render(){
        return (
            <div>
                <ul>
                    {this.renderUserList()}
                </ul>
            </div>
        )
    }
}

export default UsersList;
