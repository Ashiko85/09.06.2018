import React, { PureComponent } from 'react';

export class DateComponent extends PureComponent {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                {this.state.date}
            </div>
        );
    }
}

export default DateComponent;
