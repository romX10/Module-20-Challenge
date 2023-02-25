import React from 'react'

export default function Contact() {
  return (
    <div className="row justify-content-center">
    <div className="col-10 mt-2 rounded" style={{color: 'white', backgroundColor: '#97B1A6'}}>
    <h1>Contact Me</h1>
    <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>

    </div>
  )
}
