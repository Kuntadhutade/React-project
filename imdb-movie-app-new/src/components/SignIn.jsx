import React, { useState } from "react";
import SignInimage from "../assets/SignIn.png";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password}) 
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data); 
        alert(`Welcome ${username || "User"}! Data submit`);
      });
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f26d6d" }}>

      <div
        className="bg-white shadow rounded p-4"
        style={{ maxWidth: "850px", width: "100%" }}>

        <div className="row g-0">
         
          <div className="col-md-6 p-4">
            <h3 className="mb-4">Sign In</h3>
            <form onSubmit={handleSubmit}>
             
              <div className="input-group mb-3 bg-white">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}/>
              </div>

              
              <div className="input-group mb-3 bg-white">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"/>

                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>

              
              <button
                type="submit"
                className="btn w-50 mb-3"
                style={{ backgroundColor: "#f26d6d", color: "white" }}>
                Login
              </button>

             
              <div className="d-flex gap-2 mt-3">

              <p className="mb-1">Or, Login with</p>
                <button type="button" className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-facebook"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm">
                  <i className="bi bi-google"></i>
                </button>
                <button type="button" className="btn btn-outline-dark btn-sm">
                  <i className="bi bi-x"></i>
                </button>
              </div>

             
              <p className="mt-3">
                Don't have an account? <a href="#">Create One</a>
              </p>
            </form>
          </div>

         
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={SignInimage}
              alt="signin"
              className="img-fluid"
              style={{ maxHeight: "300px" }} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
