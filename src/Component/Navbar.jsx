import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesomeicon'
import * as Icon from 'react-bootstrap-icons'

const Navbar = ({children}) => {
  return (
    <React.Fragment>
      <div className="container page">
        <div className="navbar navbar-info">
          <div className="container-fluid px-5 py-0">
            <div className="row h-100 w-100 d-flex align-items-center justify-content-between">
              <div className="col-4 text-start h-100 d-flex align-items-center">
                <Link to="/" className="navbar-brand navbar-brand-primary tittle">
                  <h2 className="fw-bold text-uppercase" style={{ letterSpacing: "4px" }}>
                    Endtair
                  </h2>
                </Link>
              </div>
              <div className="col-5 h-100 d-flex align-items-center justify-content-end">
                <ul className="nav justify-content-end urbanist fw-bolder py-1 px-1">
                  <li className="nav-item nav-item-border p-2">
                    <Link to="/adduser" className="link-primary-enter nav-link links">Add User</Link>
                  </li>
                  <li className="nav-item nav-item-border p-2">
                    <Link to="/edit" className="link-primary-enter nav-link links">Edit</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 w-100 p-4">{children}</div>
      </div>
    </React.Fragment>
  )
}

export default Navbar;