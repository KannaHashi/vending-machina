import React from 'react'
import Profile from './../Photos/forever_3.png'
import Background from './../Photos/lamps.jpg'
import Welcome from './../Illustration/Summer.svg'

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-12-lg justify-content-end p-0">
            <div className="card border-0 shadow-lightblue-2 bg-lightblue p-5">
              <div className="row">
                <div className="col-5">
                  <img src={Welcome} alt="" className="rounded img-thumbnail border-0 p-0 bg-transparent mt-min-3" style={{ width: 'auto', height: '250px' }} />
                </div>
                <div className="col-7">
                  <div className="row">
                    <div className="col-12-lg px-5 text-start">
                      <h1 className="text-light fw-bold">ナノカ ー Platform <br /> "Vending Machine" Online</h1>
                      <p className="text-lightblue pt-3">Perasaan yang gelisah ketika lapar dan gak bawa duit memang <br /> sudah menjadi masalah utama anak kosan. Tapi beda lagi <br /> dengan anak kosan yang pake ナノカ ini! <br /> Cukup bawa hp dan atasi lapar tanpa lapar.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12-lg d-flex justify-content-start px-5">
                      <button className="btn btn-info px-3 py-2">
                        <small>
                          Lihat Inventory
                        </small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;