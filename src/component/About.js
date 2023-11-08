import React from 'react'
import '../App1.css'
export default function About() {
  return (
    <div>
      <div className="education">
       
        <h1>Education</h1>
        <h2 className='degree'>DEGREE</h2>
        <div className="bca">
            <p>Bachelor of computer application</p>
            <p>Bangalore University</p>
            <p>college:Nri institute</p>
            
            <p>CGPA : 8</p>
        </div>

        <h2 className='twelth'>PUC</h2>
        <div className="puc">
          
          <p>Stream : Science</p>
          <p>PCMB</p>
          <p>College : RPA Composite college</p>
          <p>percentage : 70%</p>
        </div>
      </div>
    </div>
  )
}
