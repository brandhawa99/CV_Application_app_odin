import React, {Component} from 'react'
import CompHeader from './CompHeader';

class General extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName:{text: ''},
            lastname:{text:''},
            email:'',
            phoneNumber:{int:null},
    
        }
    }

    render(){

        return(
            <div>
                <CompHeader title="General Information"/>
                <form>
                    <label>First Name
                    <input type={'text'}name='firstName' required></input>

                    </label>
                    <label>Last Name
                    <input type={'text'}name='lastName' required></input>

                    </label>
                    <label>Email
                    <input type={'email'}name='email' required></input>

                    </label>
                    <label>Phone #
                    <input type={'phone#'}name='phone' required></input>

                    </label>
                    
                </form>

            </div>
        )
    }
}


export default General;
