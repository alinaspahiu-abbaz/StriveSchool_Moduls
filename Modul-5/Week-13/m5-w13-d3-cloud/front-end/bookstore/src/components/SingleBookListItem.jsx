import React, { Component } from 'react'
import { Media, Button } from "react-bootstrap"
import {Link} from "react-router-dom"
export default class SingleBookListItem extends Component {

    deleteBook = async(asin) => {
        const booksResp = await fetch("http://localhost:3003/books/" + asin, {
            method:"DELETE"
        })
        if(booksResp.ok){
            // here we contact with parent to delete this is(book). The parent is on the BackOffice Component
            this.props.onDelete(asin)
        }
        
    }

    render() {

        const { title, img, category, price, asin } = this.props.item
        return (
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={img}
                    alt="Generic placeholder"
                />
                 
                <Media.Body>
                    <h5>{title}</h5>
                    
                    <p>
                        {category} - {price} $
<Button className="ml-3 pt-0" style={{height:"25px"}}
 variant = "danger" onClick= {() => this.deleteBook(asin) }> X </Button>

<Button className="ml-3 pt-0" style={{height:"25px"}}
 variant = "warning"><Link to={"/details/" + asin}>Edit </Link></Button>
                    </p>
                    
                   
                </Media.Body>
            </Media>
        )
    }
}
