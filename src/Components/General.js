import React, {useState} from 'react'
import CompHeader from './CompHeader';


const General = (props) =>  {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submit, setSubmit] = useState(false);

    const setSubmitted = (e) =>{
        e.preventDefault();
        setSubmit(!submit)
    }

    const handleChange = (e) =>{
        e.preventDefault();
        let value = e.target.name

        if(value === 'firstName'){
            setFirstName(e.target.value)
        }
        if(value === 'lastName'){
            setLastName(e.target.value)
        }
        if(value === 'email'){
            setEmail(e.target.value)
        }
        if(value === 'phoneNumber'){
            setPhoneNumber(e.target.value)
        }

    }

    const renderCV = () =>{
        return(<div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h3>{email}</h3>
            <h3>{phoneNumber}</h3>
            <button onClick={setSubmitted}>Edit</button>
        </div>
            )
    }

    const createCV =() =>{
        return(

    <form className='general-form' onSubmit={setSubmitted}>
        <label>First Name
        <input 
            value={firstName}
            type={'text'}
            name='firstName' 
            onChange={handleChange}
            required>
            </input>
        </label>

        <label>Last Name
        <input onChange={handleChange} value={lastName}type={'text'}name='lastName' required></input>
        </label>
        <label>Email
        <input onChange={handleChange}value={email}type={'email'}name='email' required></input>
        </label>

        <label>Phone #
        <input onChange={handleChange} value={phoneNumber}type={'tel'}name='phoneNumber' required></input>
        </label>
        
        <button type='submit'>Submit</button>
    </form>
                )

    }
        let disp

        if(submit){
            disp = renderCV()
        }else{
            disp = createCV()
        }

        return(
            <div>
                <CompHeader title="General Information" />
                {disp}
               

            </div>
        )
}


export default General;
