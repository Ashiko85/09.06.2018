import React, { Component } from 'react';

class Value extends Component{

    render(){
        return (
            <div>
                <p>Pobrana wartość</p>
                {this.props.userValue}
            </div>
        )
    }
}

export default Value;
