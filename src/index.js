import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './routes/home.js';
import Users from './routes/user.js';
import Contact from './routes/contact.js';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users/:userList' component={Users}/>
            <Route path="/contact" component={Contact} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
