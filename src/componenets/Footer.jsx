import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer my-4">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img src="/favicon.ico" alt="logo" />
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" target='blank' href="https://www.facebook.com/Roshan.khatri4"><i className="fa-brands fa-facebook fa-lg"></i></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-instagram fa-lg"></i></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-x-twitter fa-lg"></i></a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer