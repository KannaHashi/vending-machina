import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesomeicon'
import * as Icon from 'react-bootstrap-icons'
import $ from 'jquery'
import Profile from './../Photos/forever_3.png'

const Navbar = ({children}) => {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50 && $(document).scrollTop() < 400) {
      //  $('#navbar').addClass('position-fixed')
      //  $('#navbar').css('position', 'fixed')
    }
  });

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  }
  const ProfileOnHover = () => {
    $('#profile').removeClass('.bg-lgreen-gradient-start');
  }
  const ProfileOutHover = () => {
     $('#profile').removeClass('.bg-lgreen-gradient-start');
  }
  return (
    <React.Fragment>
      <div className="container page maxw-100 justify-content-center hw-100 overflow-y-auto">
        <div className="navbar navbar-expand-lg w-100 bg-transparent" id="navbar" style={{ zIndex: '4' }}>
          <div className="container-fluid px-5 py-0">
            <div className="row w-100 d-flex align-items-center justify-content-between">
              <div className="col-2 text-start d-flex align-items-center">
                <Link to="/" className="navbar-brand navbar-brand-primary tittle">
                  <h2 className="fw-bold text-uppercase" style={{ letterSpacing: "4px" }}>
                    ナノカ
                  </h2>
                </Link>
              </div>
              <div className="col-6 h-100 p-0 justify-content-end">
                <ul className="navbar-nav d-flex align-items-center justify-content-end urbanist fw-bolder py-1 px-1">
                  <li className="nav-item active mx-3">
                    <Link to="/adduser" className="link-primary-enter nav-link links nowrap fw-light"><Icon.CaretDownFill size={10} /> Data</Link>
                  </li>
                  {/* <li className="nav-item px-3">
                    <button className="btn outline-0">
                      <Icon.Bell color="#2F5D62" size={20} />
                    </button>
                  </li> */}
                  <li className="nav-item border-0 bg-primary-tr-2 bgtr-2 rounded-pill p-0"  id="profile" onMouseEnter={ProfileOnHover} onMouseLeave={ProfileOutHover}>
                    <Link to="/profile" className="link-primary-enter nav-link links p-2">
                      <span className="m-0 p-0">
                        <img src={Profile} className="rounded-circle border-0 p-0 overflow-hidden" id="pp" alt=""/>
                      </span>
                      <small className="mx-s-1 text-light text-capitalize nowrap">
                        Khaidir Muktamar
                      </small>
                    </Link>
                  </li>
                  <li className="nav-item ms-4 ps-3 border-start">
                    <Link className="nav-link links link-danger" onClick={handleLogout}>logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-1">{children}</div>
      </div>
    </React.Fragment>
  )
}

export default Navbar;