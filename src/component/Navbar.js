import React from 'react'
import "../App.css"
import {Link} from "react-router-dom";
import "../App"
import image from './vrushab.jpg'

export default function Navbar(props) {
  return (
    <div >
        <div className="container">
        <h2>Portfolio</h2>
        <Link to='/'>Home</Link>
        <Link to='/about'>Education</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
        </div>
        <div className="image">
            <img id='photo' src={image} alt='vrushab'/>
        </div>
        <div className="description">
            <h3 >I'am Vrushab N Acharya</h3>
            <p className='animation'> Software developer </p>
            
            
        </div>
    </div>
    
    
  )
}
