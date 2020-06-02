import React from 'react';


class MyComponent extends React.Component {

    state = {
        counter: 0,
        show:true
    }

    increase = () => {
        // dont do this --> this.state.counter = this.state.counter + 1 
        // you can not overWrite the state.

        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        console.log('PROPS OBJECT', this.props)
        console.log('State', this.state)
        return(
        <div style={{border: '2px solid aqua', marginBottom:'10px' }}>
            <button onClick={this.increase}> Increase</button>
            <p> My Counter from the state is {this.state.counter} </p>
            <h2>This is Number {this.props.spaceship}</h2> 
            <h3 className="title">{this.props.text || 'No title provided!'}</h3>
        </div> 
        )
    }

}

// const MyComponent = (props) => // functional component
// {

//     console.log('PROPS OBJECT', props)
//     return( 
//        <div style={{border: '2px solid aqua', marginBottom:'10px', padding:'15px' }}>
//          <h2>This is Number {props.spaceship}</h2> 
//          <h3 className="title">{props.text || 'No title provided, readdocs!'} 
//          </h3>
//        </div> )


// }


export default MyComponent

// PROPS
// STATE

// Class based component
