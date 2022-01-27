import React, { Component } from 'react';
import CompHeader from './CompHeader';
import uniqid from 'uniqid'


/**
 * Manages the Experices section of the resume 
 */
class Experience extends Component {
    constructor(props){
        super(props)
        this.state = {
            experiences:[
            {
                id:uniqid(),
                company :{text:'',id:uniqid()},
                position: {text:'',id:uniqid()},
                tasks:{text:'',id:uniqid()},
                startDate:{text:'',id:uniqid()},
                endDate:{text:'',id:uniqid()},
                current:{text:'',id:uniqid()},
                submitted: false,
            },


            ]

        }
    }
    /**
     * change the correct element of the correct experience
     * @param {event} e 
     */
    handleChange = (e) =>{
        e.preventDefault()
        let name = (e.target.name)
        let id = (e.target.id);
        let experiences = this.state.experiences
        experiences.forEach(experience =>{
            if(experience[name].id === id){
                experience[name].text = e.target.value;
            }
        })

        this.setState({
            experiences: experiences
        })
    }

    /**
     * add object to experices array in state
     */
    addExperience = (e) =>{
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
        this.setState({
            experiences: [...this.state.experiences,newExperience]
            
        })
    }

    setSubmit = (e) =>{
        e.preventDefault();
        let filtered = this.state.experiences.filter(experience =>{
            if(experience.id === e.target.name){
                experience.submitted = !experience.submitted;
                return true;
            }else{
                return true
            }
        })

        this.setState({
            experiences : filtered,
        })
    }


/**
 * Delete Element from experiences array
 * @param {*} e 
 */
    deleteExperience = (e) =>{
        e.preventDefault();

        let filtered = this.state.experiences.filter(experience =>{
            if(experience.id === e.target.name){
                return false; 
            }else{
                return true 
            }
        })

        this.setState({
            experiences : filtered,
        })
        console.log(this.state)


    }

    displayExerpience = () =>{
        return(
            <div>
            {
                this.state.experiences.map(experience =>{
                    if(experience.submitted === false){
                        return(
                            <form key={experience.id+1} onSubmit={this.setSubmit}>
                                <label key={experience.company.id+2}>Company <input onChange={this.handleChange} name={'company'} key={experience.company.id} id={experience.company.id} value={experience.company.text} type={'text'} required></input></label>
                                <label key={experience.position.id+2}>Positon <input onChange={this.handleChange} name={'position'} key={experience.position.id} id={experience.position.id} value={experience.position.text} type={'text'}required></input></label>
                                <label key={experience.tasks.id+2}>Main Tasks <input onChange={this.handleChange} name={'tasks'} key={experience.tasks.id} id={experience.tasks.id} value={experience.tasks.text} type={'text'}required></input></label>
                                <label key={experience.startDate.id+2}>Start Date <input onChange={this.handleChange} name={'startDate'}  key={experience.startDate.id} id={experience.startDate.id} value={experience.startDate.text} type={'date'}required></input></label>
                                <label key={experience.endDate.id+2}>End Date <input onChange={this.handleChange} name={'endDate'}key={experience.endDate.id} id={experience.endDate.id} value={experience.endDate.text} type={'date'}required></input></label>

                                <button name={experience.id} type='submit' key={experience.id+3}>Submit</button>
                                <button key={experience.id+4} onClick={this.deleteExperience} name={experience.id} > Delete </button>

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
                                <button name={experience.id} onClick={this.setSubmit} key={experience.id+7}>Edit</button>
                                <button key={experience.id+8} onClick={this.deleteExperience} name={experience.id} > Delete </button>
                            </div>
                        )
                    }
                })
            }
            </div>
        )
    }

    render(){
        const disp = this.displayExerpience()

        return(
            <div>
                <CompHeader title="Experience" />
                {disp}
                <button onClick={this.addExperience}>Add Experience</button>
            </div>
        )
    }
}
export default Experience;