import React from 'react'
import '../Projects.css'

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="resume">
        <h2>Resume Generator</h2>
        <img id='image' src='https://cdn.dribbble.com/users/36126/screenshots/2228873/rb-logo.png' alt='resume'></img>
        <div className="para">
        <p>A resume generator built using HTML, CSS, Node.js, and MongoDB is a comprehensive tool for creating professional resumes. The user interface, crafted with HTML and CSS, offers an easy-to-navigate platform for users to input their details and customize their resumes. Node.js plays a pivotal role by enabling dynamic content generation, allowing real-time updates to the resume template as users make changes. MongoDB serves as the database, securely storing user data, making it simple to save and retrieve resumes whenever needed.</p>

      <p>User authentication, managed by Node.js, ensures data privacy and security, protecting sensitive resume information. The system also offers the convenience of auto-fill capabilities, allowing users to populate their resumes with previously entered data from the database, saving time and effort. Resumes can be generated in multiple formats, such as PDF, Word, or HTML, to cater to different job application requirements.</p>
      </div>

      </div>
      <div className="news">
        <h2 id='heading'>NewsMonkey</h2>
        <div className="newsapi">
          <img id='monkey' src="https://media2.gmgroup.be/00_nm_logo.png" alt='news'></img>
          <p id='info'>The News Monkey project is an innovative web application developed using a combination of React.js, HTML, CSS, and JavaScript. Its primary goal is to offer a user-friendly and dynamic platform for accessing and interacting with news articles from various sources. Leveraging the capabilities of React.js, the project ensures a responsive and efficient frontend, while HTML structures the content in a semantic and organized manner. CSS styling enhances the visual appeal and consistency of the application, and JavaScript adds interactivity, enabling real-time search, article filtering, and dynamic updates. News Monkey integrates with news APIs to provide the latest articles, offers a responsive design for various devices, and allows users to customize their news feed. As an ongoing project, News Monkey continually evolves, incorporating new features and user feedback to provide an exceptional news consumption experience.</p>


        </div>

      </div>
    </div>
  )
}
