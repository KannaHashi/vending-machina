import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import Scanning from './../../Illustration/Scanning.jpg'

const AddUser = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    getCurrentCardUID()
  })
  
  const getCurrentCardUID = async() => {
    setInterval(async () => {
      const url = 'http://localhost:80/card'
        const response = await axios.get(url).then(data => data.data.card_uid).catch(error => error)
        setDatas(response);
        console.log(response);
    }, 2000);
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row p-5 d-flex justify-content-between">
          <div className="col-5 border-end d-flex align-items-start justify-content-start text-start">
            <form action="javascript:void(0)" method="post" className="w-100 py-5">
              <h3 className="text-primary-enter my-1">
                Id : <span className="text-secondary-enter fw-light cardUID">{(datas) ? datas : "nothing"}</span>
              </h3>
              <div class="row g-3 my-1 w-100 align-items-center">
                <div class="col-auto">
                  <label for="username" class="col-form-label text-primary-enter fw-bold text-uppercase fs-6">Username : </label>
                </div>
                <div class="col-auto">
                  <input type="text" id="username" placeholder="Must be 8-20 characters long" class="form-control rounded-0 w-100" aria-describedby="passwordHelpInline"/>
                </div>
                {/* <div class="col-auto">
                  <span id="passwordHelpInline" class="form-text">
                    <small>
                      Must be 8-20 characters long.
                    </small>
                  </span>
                </div> */}
              </div>
              <div class="row g-3 my-1 align-items-center">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label text-primary-enter fw-bold text-uppercase fs-6">Password : </label>
                </div>
                <div class="col-auto">
                  <input type="password" id="inputPassword6" placeholder="Must be 8-20 characters long" class="form-control rounded-0 w-100" aria-describedby="passwordHelpInline"/>
                </div>
              </div>
            </form>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-center">
            <img src={Scanning} className="w-80" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddUser