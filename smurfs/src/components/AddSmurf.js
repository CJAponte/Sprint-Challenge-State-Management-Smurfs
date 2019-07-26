import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';
import './components.css'

class AddSmurf extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 
    submitHandler = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render(){
        return(
            <form className="add-form" onSubmit={this.submitHandler}>
                <input className="input" onChange={this.inputHandler} type="text" name="name" placeholder="Smurf's Name" value={this.state.name}></input>
                <input className="input" onChange={this.inputHandler} type="text" name="age" value={this.state.age} placeholder="Smurf's Age"></input>
                <input className="input" onChange={this.inputHandler} type="text" name="height" placeholder="Smurf's Height?" value={this.state.height}></input>
                <button className="form-btn"type="submit">Add Smurf</button>
            </form>
        )
    }
}

export default connect( ()=>({}), {addSmurf})(AddSmurf);