import React from 'react'

export default function About() {
  return (
    <div className="row justify-content-center">
      <div className='col-5'>
        <image src='./public/imgs/mona-lisa-low-res-1.jpg'></image>
      </div>
      <div className="col-5 rounded mt-2" style={{backgroundColor: '#97b1a6'}}>
        <h1>About Me</h1>
        <p>A small paragraph about myself</p>
      </div>
    </div>
  )
}
