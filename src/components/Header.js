import React from 'react'

export default function Header({currentPage, handlePageChange}) {
  return (
    <nav style={{backgroundColor: '#97b1a6'}} className="navbar navbar-expand-lg text-light">
        <div className="container-fluid">
          <h1 className="navbar-brand ps-2" href="#">Roman Stigler</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                aria-current="page"
                href="#about"
                onClick={() => handlePageChange('About')}
                >
                About Me
                </a>
              </li>
              <li className="nav-item">
                <a 
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                aria-current="page"
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                >
                Portfolio
                </a>
              </li>
              <li className="nav-item">
              <a 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                aria-current="page"
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                >
                Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                aria-current="page"
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                >
                Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}
