import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import { createUser } from "./api"; // <-- connect to backend

export default function App() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault(); // <-- Prevent page reload
  const userData = { username: form.username, password: form.password };
  try {
    const response = await createUser(userData);
    // console.log("Created:", response);
  } catch (err) {
    console.error("Error creating user:", err);
  }
};



  return (
    <div className="container-xxl">
      <div className="row vh-100 d-flex justify-content-center">
        <div className="col-12 align-self-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xxl-4 mx-auto">
              <div className="card" >
                <div
                  className="card-body p-0 bg-primary auth-header-box rounded-top" 
                >
                  <div className="text-center p-3" style={{ color: "#005B6F"}}>
                    <a href="#" className="logo logo-admin">
                      <img
                        src={logo}
                        alt="Logo"
                        className="img-fluid img-thumbnail"
                        style={{ height: "60px" }}
                      />
                    </a>
                    <div className="dropdown-divider my-2"></div>
                    <h1 href="#" className="text-white h3">
                      University Of Asia Pacific
                    </h1>
                    <p className="text-muted fw-medium mb-0">
                      Sign in to continue.
                    </p>
                  </div>
                </div>

                <div className="card-body pt-0">
                   <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group mt-4 mb-2">
          <label className="form-label" htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
                    <div className="form-group row mt-3">
                      <div className="col-sm-6">
                        <div className="form-check form-switch form-switch-success">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 text-end">
                        <a
                          href="#"
                          className="text-muted font-13"
                          data-bs-toggle="modal"
                          data-bs-target="#passwordResetModal"
                        >
                          <i className="dripicons-lock"></i> Forgot password?
                        </a>
                      </div>
                    </div>

                    <div className="form-group mb-0 row">
                      <div className="col-12">
                        <div className="d-grid mt-3">
                          {!loading ? (
                            <button
                              className="btn btn-primary"
                              id="loginBtn"
                              type="submit"
                            >
                              Log In <i className="fas fa-sign-in-alt ms-1"></i>
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary"
                              id="loadingBtn"
                              type="button"
                              disabled
                            >
                              <span
                                className="spinner-border spinner-border-sm"
                                aria-hidden="true"
                              ></span>
                              <span role="status">Loading...</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="text-center my-2">
                    <small className="text-muted">
                      If you are a student and do not have an account yet,
                      please click the button below to register:
                      <a
                        href="/registration"
                        className="btn btn-primary btn-sm ms-1"
                      >
                        Registration
                      </a>
                    </small>
                  </div>
                </div>
              </div>

              <br />

              <div className="text-center">
                <i>Copyright &copy;</i>{" "}
                <a href="https://aalo.xyz/" target="_blank" rel="noreferrer">
                  <img
                    className="m-0"
                    alt="softbd logo"
                    src="/old/img/aalo_bn.png"
                    height="40"
                    width="90"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
