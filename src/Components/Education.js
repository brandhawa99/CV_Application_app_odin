import React, { Component } from 'react';
import CompHeader from '../Components/CompHeader'


class Education extends Component{
    constructor(props){
        super(props)
        this.state = {
            school: '',
            program:'',
            startDate: '',
            endDate:'',
            currentlyEnrolled:false,
            hasSubmited:false, 

        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let value = e.target.name; 
        this.setState({
            [value] : e.target.value
        })
    }

    checkCurrentlyEnrolled = (e) =>{
        console.log(e);
        this.setState({ currentlyEnrolled: e.target.checked})
    }

    setSubmit = (e) =>{
        e.preventDefault();
        this.setState({hasSubmited: !this.state.hasSubmited})
    }
    createCV = () =>{
        return (
            <div>
                <h3>{this.state.school}</h3>
                <div>
                    <strong>
                        {this.state.program}
                    </strong>
                    
                    {!this.state.currentlyEnrolled && 
                    <p> 
                        {this.state.startDate} --
                        {this.state.endDate} 
                    </p> 
                    }
                    {this.state.currentlyEnrolled && 
                    <p> 
                        {this.state.startDate} 
                        - Current 
                    </p> 
                    }
                </div>
                    {this.state.currentlyEnrolled} 
                <button onClick={this.setSubmit}>Edit</button>
            </div>

        )
    }

    createEducation = () =>{
        const {school, program,startDate,endDate, currentlyEnrolled} = this.state

        return(
            <form key={'thisisapassword'}onSubmit={this.setSubmit}>
                <label>
                    School: 
                    <input
                        value={school}
                        type={"text"}
                        name='school'
                        required
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label>
                    Program: 
                    <input
                        value={program}
                        type={"text"}
                        name='program'
                        required
                        onChange={this.handleChange}
                    ></input>
                </label>
                <label>
                    Start Date: 
                    <input
                        value={startDate}
                        type={"date"}
                        name='startDate'
                        required
                        onChange={this.handleChange}
                    ></input>
                </label>
                {!currentlyEnrolled &&
                
                <label>
                    End Date: 
                    <input
                        value={endDate}
                        type={"date"}
                        name='endDate'
                        onChange={this.handleChange}
                    >

                    </input>
                </label>
                }

                <label>
                Currently Enrolled
                <input
                key={'thisistheKEYKEYKEY'}
                name='currentlyEnrolled'
                type="checkbox"
                onChange={this.checkCurrentlyEnrolled}
                >
                </input>
                </label>
                <button type='submit'>Submit</button>
            </form>

        )

    }

    render(){
        let disp 
        if(this.state.hasSubmited){
            disp = this.createCV()
        }else{
            disp = this.createEducation()
        }

        return(
        <div>
            <CompHeader title="Education" />
            {disp}

        </div>
        )};
}

export default Education