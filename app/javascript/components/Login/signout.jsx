import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class SignOut extends Component {
   
    render() {
        this.props.signOut()
        return (
            <Redirect to='/home' />
        )
    }
}