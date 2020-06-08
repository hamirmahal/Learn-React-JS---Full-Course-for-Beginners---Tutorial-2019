import React from 'react'

function Conditional(props) {
    console.log("Running Conditional functional component")
    let string
    let loadingText = "We are currently still loading."
    let done = "More than "
    done += props.timeout/1000
    done += " seconds has passed."
    props.isLoading ? string = loadingText : string = done
    return (
        <section>
            <p>{string}</p>
        </section>
    )
}

export default Conditional