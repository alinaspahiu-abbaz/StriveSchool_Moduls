// to use the state 
import React from 'react'

class App extends React.Component{

    state ={ 
            listElement: []
          }

    render(){
    console.log('props in newcomponent', props)
    return (
    <div>
        <ul>
          {
            props.elements.map(
              (element) => 
                (
                  <li> {element} </li>
                )
              )
          }
        </ul>
    </div> 
    )

        }S
}

export default UseState