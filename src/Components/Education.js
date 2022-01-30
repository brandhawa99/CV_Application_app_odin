import React, { useState} from 'react';
import CompHeader from '../Components/CompHeader'


const  Education = (props) =>{
    const [school, setSchool] = useState('')
    const [program, setProgram] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [enrolled, setEnrolled] = useState(false)
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) =>{
        e.preventDefault();
        let value = e.target.name; 

        if(value === 'school'){
            setSchool(e.target.value)
        }
        if(value === 'program'){
            setProgram(e.target.value)
        }
        if(value === 'startDate'){
            setStartDate(e.target.value)
        }
        if(value === 'endDate'){
            setEndDate(e.target.value)
        }
    }

    const checkCurrentlyEnrolled = (e) =>{
        e.preventDefault();
        setEnrolled(!e.target.checked)
    }

    const upDateSubmit = (e) =>{
        e.preventDefault();
        setSubmit(!submit);
    }
    const createCV = () =>{
        return (
            <div>
                <h3>{school}</h3>
                <div>
                    <strong>
                        {program}
                    </strong>
                    
                    {!enrolled && 
                    <p> 
                        {startDate} --
                        {endDate} 
                    </p> 
                    }
                    {enrolled && 
                    <p> 
                        {startDate} 
                        - Current 
                    </p> 
                    }
                </div>
                    {enrolled} 
                <button onClick={upDateSubmit}>Edit</button>
            </div>

        )
    }

    const createEducation = () =>{

        return(
            <form key={'thisisapassword'}onSubmit={upDateSubmit}>
                <label>
                    School: 
                    <input
                        value={school}
                        type={"text"}
                        name='school'
                        required
                        onChange={handleChange}
                    ></input>
                </label>

                <label>
                    Program: 
                    <input
                        value={program}
                        type={"text"}
                        name='program'
                        required
                        onChange={handleChange}
                    ></input>
                </label>
                <label>
                    Start Date: 
                    <input
                        value={startDate}
                        type={"date"}
                        name='startDate'
                        required
                        onChange={handleChange}
                    ></input>
                </label>
                {!enrolled &&
                
                <label>
                    End Date: 
                    <input
                        value={endDate}
                        type={"date"}
                        name='endDate'
                        onChange={handleChange}
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
                onChange={checkCurrentlyEnrolled}
                >
                </input>
                </label>
                <button type='submit'>Submit</button>
            </form>

        )

    }
    
    let disp 
        if(submit){
            disp = createCV()
        }else{
            disp = createEducation()
        }

        return(
        <div>
            <CompHeader title="Education" />
            {disp}

        </div>
        )
};

export default Education