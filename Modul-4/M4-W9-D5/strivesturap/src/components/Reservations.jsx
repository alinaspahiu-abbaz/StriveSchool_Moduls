import React from 'react';
import { ListGroup} from 'react-bootstrap'

class Reservations extends React.Component {

 state={
        reservations: []
       }

 componentDidMount = async () => {
     // this is the perfect place to make FETCHES
     console.log("Im in the ComponentDidmount method")
     try {
         let response = await fetch("https://striveschool.herokuapp.com/api/reservation")
         let reservations = await response.json()

         console.log('Reservations areL:' , reservations)
         this.setState( { reservations: reservations} )
     } catch(err) {
         console.log('error', err)
     }
 }
render() {
  return (
    <div className='mt-2'>
      <ListGroup> 
          { this.state.reservations.length > 0 && this.state.reservations.map((reservation, i) =>{
            return(
                <ListGroup.Item key={i}>
                    From: {reservation.name}, 
                    for {reservation.numberOfPersons},
                     at: {reservation.dateTime}
                 </ListGroup.Item>
                    )
            }
          )
            }
                </ListGroup>
                {this.state.reservations.length === 0 && (<div className='mb-5'><h4>Nooooo reservations! </h4></div>)}
            </div>
        )
       }   
}

export default Reservations