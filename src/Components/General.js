import React, {Component} from 'react'
import CompHeader from './CompHeader';


class General extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber:'',

            hasSubmitted: false,
    
        }
    }

    setSubmitted = (e) =>{
        e.preventDefault();
        this.setState({hasSubmitted: !this.state.hasSubmitted})
    }

    handleChange = (e) =>{
        e.preventDefault();
        let value = e.target.name
        this.setState({
            [value] : e.target.value           
            
        })  
    }

    renderCV = () =>{
        return(<div>
            <h1>
                {this.state.firstName} {this.state.lastName}
            </h1>
            <h3>{this.state.email}</h3>
            <h3>{this.state.phoneNumber}</h3>
            <button onClick={this.setSubmitted}>Edit</button>
        </div>
            )
    }

    createCV =() =>{
        const {firstName,lastName,email,phoneNumber} = this.state
        return(

    <form className='general-form' onSubmit={this.setSubmitted}>
        <label>First Name
        <input 
            value={firstName}
            type={'text'}
            name='firstName' 
            onChange={this.handleChange}
            required>
            </input>
        </label>

        <label>Last Name
        <input onChange={this.handleChange} value={lastName}type={'text'}name='lastName' required></input>
        </label>
        <label>Email
        <input onChange={this.handleChange}value={email}type={'email'}name='email' required></input>
        </label>

        <label>Phone #
        <input onChange={this.handleChange} value={phoneNumber}type={'tel'}name='phoneNumber' required></input>
        </label>
        
        <button type='submit'>Submit</button>
    </form>
                )

    }
    
    render(){
        let disp

        if(this.state.hasSubmitted){
            disp = this.renderCV()
        }else{
            disp = this.createCV()
        }

        return(
            <div>
                <CompHeader title="General Information" />
                {disp}
               

            </div>
        )
    }
}


export default General;
