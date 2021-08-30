import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import Scanning from './../../Illustration/Scanning.jpg'
import Profile from './../../Photos/forever_3.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { join } from 'path'

const { networkInterfaces } = require('os')
const nets = networkInterfaces();
const results = Object.create(null);

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
          if (!results[name]) {
              results[name] = [];
          }
          results[name].push(net.address);
      }
  }
}

const AddUser = () => {
  const [datas, setDatas] = useState([])

  const [username, setUsername] = useState()
  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [phonenumber, setPhonenumber] = useState()

  useEffect(() => {
    getCurrentCardUID();
  }, [])
  
  const getCurrentCardUID = async() => {
    setInterval( async () => {
      const url = `http://localhost/card`
        const response = await axios.get(url).then(data => data.data.card_uid).catch(error => error)
        setDatas(response);
        console.log(response);
        // console.log(results);
    }, 2000);
  }

  const Post = async (e) => {
    const url = `http://localhost/card/register_card`;
    const payload = {
      user_name: username,
      full_name: fullname,
      email: email,
      phone_number: phonenumber
    };
    console.log(payload);
    try {
      let response = await axios.post(url, payload);
      console.log('Alhamdulillah, Berhasil Ditambahkan!')
      console.log(response)
    } catch {
      console.log("Gagal Menambahkan Setoran");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Post();
  };

  const setPrettier = (e) => {
    const getValue = e.target.value
    const variable = document.getElementById('phone_number')
    // const regexp = /[0-9]{4}/g
    // const value = String(e).match(regexp)
    const valueL = getValue.length
    const valueStrip = getValue.charAt(4)
    if (valueL > 4) {
      valueStrip.innerHTML = '-'
      console.log(valueStrip.innerHTML('-'))
    } else {
      return null
    }
    // return value
  }

  return (
    <React.Fragment>
      <div className="container-fluid hw-100">
        <div className="row h-100 d-flex align-items-center justify-content-around">
          {/* <div className="col-2 bg-secondary-enter h-100 overflow-y-auto py-3">
              <div className="row text-start mx-2 mb-3 tittle text-primary-enter">
                <Link className="navbar-brand links link-primary-enter">
                <h3>
                  Nanao
                </h3>
                </Link>
              </div>
            <div className="container-fluid bg-trial-enter py-2 rounded">
              <div className="row justify-content-center my-4">
                <div className="col-auto">
                  <img src={Profile} alt="" className="img-thumbnail border p-0 rounded-circle profile-circle" />
                </div>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-auto text-secondary-enter">
                  <p className="text-capitalize text-center p-0 my-2 nowrap">
                    A. Khaidir Muktamar
                  </p>
                </div>
                <small className="badge bg-primary-enter rounded p-2" style={{ width: 'max-content' }}>@_Nanokaaa</small>
              </div>
            </div>
          </div> */}
          <div className="col-5 d-flex align-items-start justify-content-start">
            <img src={Scanning} className="w-100 maxw-100" alt="" />
          </div>
          <div className="col-4 d-flex align-items-center justify-content-start text-start">
            <form action={onSubmit} method="post" className="w-100 py-5 card shadow-lightblue border-0 p-5 pb-0">
              <h4 className="text-primary-enter my-1">
                ID : <span className="text-secondary-enter fw-light cardUID">{(datas !== "") ? datas : "nothing"}</span>
              </h4>
              <div className="row g-3 my-0 align-items-center text-uppercase">
                <div className="">
                  <label for="username" className="col-form-label text-primary-enter fw-bold fs-7">Username : </label>
                </div>
                <div className="my-1">
                  <input type="text" id="username" placeholder="Must be 8-20 characters long" minLength="8" maxLength="20" required="true" className="form-control form-contol bg-frial-enter p-2 rounded fs-7" onChange={(e) => {
                      setUsername(e.target.value)
                    }} />
                </div>
              </div>
              <div className="row g-3 my-0 align-items-center text-uppercase">
                <div className="">
                  <label for="full_name" minLength="8" maxLength="20" required="true" className="col-form-label text-primary-enter fw-bold fs-7">Full Name : </label>
                </div>
                <div className="my-1">
                  <input type="text" id="full_name" className="form-control form-contol bg-frial-enter p-2 rounded fs-7" onChange={(e) => {
                    setFullname(e.target.value)
                  }} />
                </div>
              </div>
              <div className="row g-3 my-0 align-items-center text-uppercase">
                <div className="">
                  <label for="email" required="true" className="col-form-label text-primary-enter fw-bold fs-7">Email : </label>
                </div>
                <div className="my-1">
                  <input type="email" id="email" className="form-control form-contol bg-frial-enter p-2 rounded fs-7" onChange={(e) => {
                    setEmail(e.target.value)
                  }}/>
                </div>
              </div>
              <div className="row g-3 my-0 text-uppercase">
                <div className="">
                  <label for="phone_number" required="true" className="col-form-label text-primary-enter fw-bold fs-7">Phone Number : </label>
                </div>
                <div className="my-1">
                  <input type="number" id="phone_number" className="form-control form-contol bg-frial-enter p-2 rounded fs-7" onChange={(e) => {
                    setPhonenumber(e.target.value)
                  }} onKeyUp={(e) => {
                    setPrettier(e.target.value)
                  }} />
                </div>
              </div>
              <div className="row my-5">
                <div className="col-12-lg justify-content-end">
                  <button type="submit" className="btn btn-outline-info fs-7">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddUser