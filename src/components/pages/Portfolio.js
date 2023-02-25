import React from 'react'
import projects from '../../utils/projects'

export default function Portfolio() {
  return (
    <div classname='mt-2'>
      <ul className='row row-cols-2'>
        {projects.map(() => (
          <li className='row' key={projects.name}></li>
        ))}
      </ul>
    </div>
  )
}
