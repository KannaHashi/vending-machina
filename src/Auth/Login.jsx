import React, {useState} from 'react'
import PropTypes from "prop-types";

async function loginUser(credentials) {
  var formBody = [];
  for (var property in credentials) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(credentials[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  return fetch("http://192.168.0.117/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  }).then((data) => data.json());
}

const Login = ({ setToken }, props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [load, setLoad] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    console.log(email, password)
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    window.location.href = "/";
    setLoad(false);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    // Post()
  }
  return (
    <React.Fragment>
      <div className="container hw-100 p-5">
        <div className="row h-100">
          <div className="col-9"></div>
          <div className="col-3">
            <div className="card border-0 h-100 justify-content-center">
              <form action="" onSubmit={handleSubmit}>
                <div className="container-fluid">
                  <div className="row mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <button className="btn btn-primary rounded-3" type="submit">
                  <small>
                    Login
                  </small>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};