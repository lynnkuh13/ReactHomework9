import React, {Component} from 'react';
import './Counter.css';

//
// Your code should include :

 //   Use class based component
 //   Create button to increase the starting count 
 //   ComponentDidMount() to print out the state of variable
 //   ComponentDidUpdate()  to print out the state of variable as it updates 




class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startingCount
        }
        this.add = this.add.bind(this);
    }

    // function to add 1 to counter
    add() {
        this.setState({ count: this.state.count + 1 });
    }

    // add a message to componentDidMount
    componentDidMount() {
        console.log("The Counter MOUNTED " + this.state.count);
    }

    // add a message to componentDidUpdate (this renders the component again)
    componentDidUpdate() {
        console.log("The Counter UPDATED " + this.state.count);
    }

    render() {
        return (
            <div id="counter">
                <h1> <button onClick={this.add} id="increase">Increase</button></h1>
                <h2>{this.state.count}</h2>
            </div>
        )
    }

}
export default Counter;