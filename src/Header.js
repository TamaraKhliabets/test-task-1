import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles/Header.css';

export default class Header extends Component{
    render() {
        return(
            <div className='header'>
                <Link to={'/'} className='header_link'>Home</Link>
                <Link to={'/news'} className='header_link'>News</Link>
                <Link to={'/profile'} className='header_link'>Profile</Link>
            </div>
        )
    }
}
