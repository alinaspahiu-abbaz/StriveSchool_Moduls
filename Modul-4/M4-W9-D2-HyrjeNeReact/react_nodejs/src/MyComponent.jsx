import React from "react"

class MyComponent extends React.Component {

    state = {
        counter: 0,
    }

    increase = () =>{
        this.setState({
            counter: this.state.counter +1
        })
    }

    decrease = () =>{
        this.setState({counter:this.state.counter -1})
    }
    
    render(){
        
        return(
        <div>
            <button onClick={this.decrease}> Decrease </button>
            <button onClick={this.increase}> Increase </button>
            
            <p> My Counter from the state is {this.state.counter} </p>
            
            <h1 className="title">{this.props.text || 'No title provided'} 
           This is number {this.props.number}</h1>
        </div>
        )
        
    

    }
}

export default MyComponent
