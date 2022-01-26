import React, { Component } from 'react';
import CompHeader from './CompHeader';


class Experience extends Component {

    constructor(props){
        super(props)
        this.state = {
            company :'',
            position: '',
            tasks:'',
            startDate:'',
            endDate:'',
            current:'',
            
            experiences:[

            ]

        }
    }


    render(){

        return(
            <div>
                <CompHeader title="Experience" />

                <form>
                    <label>
                        Company: 
                        <input type={'text'}></input>
                    </label>

                </form>
            </div>
        )
    }
}
export default Experience;