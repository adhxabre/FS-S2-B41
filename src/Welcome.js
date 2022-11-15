//import useEffect here
import React, { useEffect } from 'react'

const number = [1, 2, 3, 4, 5]
const doubled = number.map((number) => number * 2)

export default function Welcome() {
    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Welcome Component Did Mount" & "Welcome Component Will Unmount"
    useEffect(() => {
        console.log("Welcome component did mount")
        return () => {
            console.log("Welcome component will unmount")
        }
    }, [])

    return (
        <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
            {number.map((number) => <h1>{number}</h1>)}
        </div>
    )
}
