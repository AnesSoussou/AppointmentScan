import React from 'react'
import './home.css'

function About() {
    return (
        <div className="home_page">
            <h2>Hello everyone!</h2>
            <p>
                This site is about taking and management appointments between our
                entreprise and others clients.To have an idea about our entreprise
                please click on the logo below!
            </p>
            <a href="https://www.scantech-group.com/scantech/" target="_blank"
                rel="noopener noreferrer"><img src="https://scontent.ftun17-1.fna.fbcdn.net/v/t31.18172-8/902628_186142268203799_274835585_o.png?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=uUrO6LpQrLEAX9YxaCg&_nc_ht=scontent.ftun17-1.fna&oh=b4d62b6c11f98f275bf1a2334465a974&oe=60D2D70D"
                    height="300px" position="center" /></a>

        </div>
    )
}

export default About