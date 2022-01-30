import React, { Component, useState } from 'react';
import CompHeader from './CompHeader';
import uniqid from 'uniqid'


/**
 * Manages the Experices section of the resume 
 */
const Experience = (props) => {

    const [Experiences , setExperiences] = useState([]); 
    /**
     * change the correct element of the correct experience
     * @param {event} e 
     */
    const handleChange = (e) =>{
        e.preventDefault()
        let name = (e.target.name)
        let id = (e.target.id);
        let experiences = Experiences
        experiences.forEach(experience =>{
            if(experience[name].id === id){
                experience[name].text = e.target.value;
            }
        })

        setExperiences(experiences);
    }

    /**
     * add object to experices array in state
     */
    const addExperience = (e) =>{
        e.preventDefault();
        const newExperience =      {
            id:uniqid(),
            company :{text:'',id:uniqid()},
            position: {text:'',id:uniqid()},
            tasks:{text:'',id:uniqid()},
            startDate:{text:'',id:uniqid()},
            endDate:{text:'',id:uniqid()},
            current:{text:'',id:uniqid()},
            submitted: false,
        }
        setExperiences([...Experiences, newExperience]);
    }

    const setSubmit = (e) =>{

        e.preventDefault();
        let filtered = Experiences.filter(experience =>{
            if(experience.id === e.target.name){
                experience.submitted = !experience.submitted;
                return true;
            }else{
                return true
            }
        })

        setExperiences(filtered);
    }


/**
 * Delete Element from experiences array
 * @param {*} e 
 */
    const deleteExperience = (e) =>{
        e.preventDefault();

        let filtered = Experiences.filter(experience =>{
            if(experience.id === e.target.name){
                return false; 
            }else{
                return true 
            }
        })

        setExperiences(filtered);


    }

    const displayExerpience = () =>{
        return(
            <div>
            {
                Experiences.map(experience =>{
                    if(experience.submitted === false){
                        return(
                            <form key={experience.id+1} name={experience.id}onSubmit={setSubmit}>
                                <label key={experience.company.id+2}>Company <input onChange={handleChange} name={'company'} key={experience.company.id} id={experience.company.id} value={experience.company.text} type={'text'} required></input></label>
                                <label key={experience.position.id+2}>Positon <input onChange={handleChange} name={'position'} key={experience.position.id} id={experience.position.id} value={experience.position.text} type={'text'}required></input></label>
                                <label key={experience.tasks.id+2}>Main Tasks <input onChange={handleChange} name={'tasks'} key={experience.tasks.id} id={experience.tasks.id} value={experience.tasks.text} type={'text'}required></input></label>
                                <label key={experience.startDate.id+2}>Start Date <input onChange={handleChange} name={'startDate'}  key={experience.startDate.id} id={experience.startDate.id} value={experience.startDate.text} type={'date'}required></input></label>
                                <label key={experience.endDate.id+2}>End Date <input onChange={handleChange} name={'endDate'}key={experience.endDate.id} id={experience.endDate.id} value={experience.endDate.text} type={'date'}required></input></label>

                                <button name={experience.id} type='submit' key={experience.id+3}>Submit</button>
                                <button key={experience.id+4} onClick={deleteExperience} name={experience.id} > Delete </button>

                            </form>
                        )
                    }
                    if(experience.submitted === true){
                        return(
                            <div key={experience.id+11}>
                                <h1 key={experience.company.id+6}>{experience.company.text}</h1>
                                <div> {experience.position.text} </div>
                                <div> {experience.tasks.text} </div>
                                <div> {experience.startDate.text} - {experience.endDate.text} </div>
                                <button name={experience.id} onClick={setSubmit} key={experience.id+7}>Edit</button>
                                <button key={experience.id+8} onClick={deleteExperience} name={experience.id} > Delete </button>
                            </div>
                        )
                    }
                })
            }
            </div>
        )
    }

        const disp = displayExerpience()

        return(
            <div>
                <CompHeader title="Experience" />
                {disp}
                <button onClick={addExperience}>Add Experience</button>
            </div>
        )
}
export default Experience;