import React from 'react'

// This function should only know what to do
// when it's supposed to display.

function Conditional(props) {
    console.log("Running Conditional functional component")
    return <p>More than {props.timeout/1000} seconds has
            passed!</p>
}

export default Conditional