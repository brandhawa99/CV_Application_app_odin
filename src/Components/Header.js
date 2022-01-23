import React,{Component} from 'react';
import '../styles/Header.css'

class Header extends Component {

    render(){
        return(<div className='container'>
            <header className='header'>
                Create Your CV
            </header>
            <div className='createdBy'>created by: Baltej Randhawa</div>
        </div>
        )
    }
}

export default Header;