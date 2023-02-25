import React from 'react'

export default function Resume() {
  return (
    <div className="row justify-content-center">
        <div className="col-10 my-2 rounded" style={{backgroundColor: '#97b1a6'}}>
            <h2>Front-End Profiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
        </div>
        <div className="col-10 my-2 rounded" style={{backgroundColor: '#97b1a6'}}>
            <h2>Back-End Profiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </div>
  )
}
