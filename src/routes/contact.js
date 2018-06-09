import React, { PureComponent, Fragment } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../components/menu.component.js';

class Contact extends PureComponent {
  render() {
    return (
        <Fragment>
            <Header applicationName="Homework 14"/>
            <Menu/>
            <Footer currentDatde=" "/>
        </Fragment>
    );
  }
}

export default Contact;
