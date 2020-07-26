import React from 'react';
import { ListGroup} from 'react-bootstrap'

class Reservation extends React.Component {
    state={
        reservation: []
    }

    render() {
        return (
            <div className='mt-2'>
                <ListGroup> 
                    {
                    this.state.reservations.length >0 && this.state.reservations.map((reservation, i) =>
    
                        return(
                            <ListGroup.Item key={i}>
                                From: {reservation.name}, 
                                for {reservation.numberOfPersons},
                                at {reservation.dateTime}
                            </ListGroup.Item>
                        )
                          }  )
                   })
                </ListGroup>
                {this.state.reservations.length === 0 && (<div>No reservations! </div>)}
            </div>
        )
    }
}

export default Reservations