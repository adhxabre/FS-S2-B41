import React, { Component } from 'react'

export default class Welcome extends Component {

    //Create method DidMount inside it can print "Welcome Component Did Mount" here...
    componentDidMount() {
        console.log("Welcome component did mount")
    }

    //Create method WillUnmount inside it can print "Welcome Component  Will Unmount" here...
    componentWillUnmount() {
        console.log("Welcome component will unmount")
    }

    render() {
        return (
            <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
                Welcome
            </div>
        )
    }
}