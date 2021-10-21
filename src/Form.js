import React, {Component} from 'react';
import './Form.css';

//Create a form that takes in two values Name and ID.
// Create submit button to print out Name and ID in console.

class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        ID: ''
    };
    this.getName = this.getName.bind(this);
    this.getId = this.getId.bind(this);

    }

    getName(event) {
        this.setState({name: event.target.value})
        console.log(this.state.name);
    }

    getId(event){
        this.setState({ID: event.target.value})
        console.log(this.state.ID);
    }

    render() {
        return(
            <div>
                <form className="form">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.getName} />
                    <label>ID:</label>
                    <input type="text" value={this.state.ID} onChange={this.getId} />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>

        );
    }

}
export default Form;

