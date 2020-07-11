import React, { Component } from 'react'
import axios from "axios"

export default class MyForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedFiles:null, 
        }
    }

    onChangeHandler = (event) => {
        const files = event.target.files 
        this.setState({ selectedFiles: [... files]})
    }

    onClickHandler = async () => {
       const data = new FormData()

      this.state.selectedFiles.map((file) => data.append("multipleAvatar", file))

       await axios({
           method: "post",
           url: "http://localhost:4002/files/uploadMultiple",
           data ,
       })
    }
    render() {
        return (
            <div>
                <form method="post" action="#" id="#">
                    <div className="form-group files">
                        <label> Upload Your File</label>
                        <input type="file" name="file" multiple
                        onChange={this.onChangeHandler} />

                    <button type="button" onClick={this.onClickHandler}>Send</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
