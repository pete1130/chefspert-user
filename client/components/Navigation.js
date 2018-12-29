import React,{Component} from 'react';
import { NavLink} from 'react-router-dom';




class Navigation extends Component {
   
    
    render() {
    
        return (
        <nav>
            <ul className="nav-buttons">
            <li><NavLink className="buttonNav" to='/'>Home</NavLink></li>
            </ul>
        </nav>
        );
        }
    }







export default Navigation;