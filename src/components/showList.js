import React, { PureComponent } from 'react';


class ShowUsers extends PureComponent{
    state ={
        repo_url: {},
    };

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.userList}?client_id=36924b0cb2cf812e366a&client_secret=1b3afec0e38043e678001c63f72c81fa2d16aee4`)
            .then(response => response.json())
            .then(data => this.setState({
                repo_url: data,
            }));
    }

    render(){
        return (
            <Fragment>
                <div>
                    {this.state.repo_url.name}
                </div>

            </Fragment>
        );

export default ShowUsers;
