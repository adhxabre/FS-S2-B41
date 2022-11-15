//import useEffect here
import React, { useEffect } from 'react'

export default function GuestGreeting() {

    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Guest Greeting Component Did Mount" & "Guest Greeting Component Will Unmount"
    useEffect(() => {
        return () => {
            console.log("Guest greetings component will unmount")
        }
    }, [])

    return (
        <div className="text-center h1 bg-secondary text-light py-5">
            Please Login !
        </div>
    )
}
