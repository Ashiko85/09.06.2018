import React, {Component} from 'react';
import './footer.css';
import DateComponent from './date.js'

class Footer extends Component {
    render(){
        return (
            <div className ="footer">
            <div>
                {this.props.currentDate}
                <DateComponent/>
            </div>
            </div>
    );
    }
}

export default Footer;
