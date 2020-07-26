// Functional Component --> PROPS
// Class Based Component --> props, state, lifecycle methods

import React from 'react'

const NewComponent = (props) => {
    console.log('props in newcomponent', props)
    return (
    <div >
        <h1> My list of elements:</h1>
         <ul> { props.elements.slice(0,5).map( 
           (element, i) => ( <li key={i}> {element} </li>)) } </ul>
    </div> 
    )


}

export default NewComponent