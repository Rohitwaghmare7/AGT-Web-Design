import React, { useState } from "react";
import { FaChevronDown, FaSearch, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import SignupImage from "../assets/signup-OCG-APNN.svg";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [credentials, setCredentials] = useState({
    login: {
      email: "",
      password: "",
      showPassword: false,
    },
    register: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    },
  });

  const handleInputChange = (formType, e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [formType]: {
        ...prevState[formType],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {

      console.log(credentials.login);
    } else {

      console.log(credentials.register);
    }
    closeModal();
  };


  const togglePasswordVisibility = (formType) => {
    setCredentials((prevState) => ({
      ...prevState,
      [formType]: {
        ...prevState[formType],
        showPassword: !prevState[formType].showPassword,
      },
    }));
  };


  const openModal = () => {
    setIsModalOpen(true);
    setIsLoginForm(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const switchToRegisterForm = () => {
    setIsLoginForm(false);
  };

  const switchToLoginForm = () => {
    setIsLoginForm(true);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg my-navbar"
        style={{ backgroundColor: "white", padding: "15px 100px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Website Logo"
              style={{ height: "50%", width: "100%" }}
            />
          </Link>
          <div className="mx-auto">
            <form
              className="d-flex"
              role="search"
              style={{ position: "relative" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search for your favorite group in AGT"
                aria-label="Search"
                style={{
                  width: "380px",
                  borderRadius: "15px",
                  paddingLeft: "45px",
                  backgroundColor: "#ebebeb",
                }}
              />
              <FaSearch
                style={{
                  color: "gray",
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </form>
          </div>
          <div className="ml-auto">
            <Link
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
              onClick={openModal}
            >
              Create Account.{" "}
              <strong>
                <span style={{ marginLeft: "2px", color: "blue" }}>
                  It's Free!
                </span>
              </strong>
              <FaChevronDown style={{ marginLeft: "5px" }} />
            </Link>
          </div>
        </div>
      </nav>
      <Modal size="lg" show={isModalOpen} onHide={closeModal} centered>
        <Modal.Body className="p-0" style={{ margin: 0, padding: 0 }}>

          <div className="row justify-content-center">
            <div className="col-md-12">
              <p className="head text-center mt-3" style={{ color: 'green', fontWeight: '500', fontSize: '15px' }}>
                Let's learn, share & inspire each other with our passion for computer engineering. Sign In now 🤘🏻
              </p>
              <hr />
              <div className="card-title d-flex justify-content-between align-items-center">
                <h4 className="mx-3" style={{ fontWeight: 'bold' }}>{isLoginForm ? 'Sign In' : 'Create Account'}</h4>
                <div className="d-flex justify-content-between align-items-center mx-3">
                  {isLoginForm ? (
                    <>
                      <span className="my-3 ms-2">Need an account?</span>
                      <Link to="#" className="mx-1 register-link" onClick={switchToRegisterForm}>
                        Register
                      </Link>
                    </>
                  ) : (
                    <>
                      <span className="my-3 ms-2">Already have an account?</span>
                      <Link to="#" className="mx-1 register-link" onClick={switchToLoginForm}>
                        Sign In
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-md-6">
              <div className="card" style={{ border: 'none' }}>
                <div className="card-body">
                  {isLoginForm ? (

                    <form onSubmit={handleSubmit} style={{ border: 'none', paddingLeft: '10px' }}>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="login-email"
                          name="email"
                          required
                          value={credentials.login.email}
                          onChange={(e) => handleInputChange('login', e)}
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="position-relative">
                          <input
                            type={credentials.login.showPassword ? 'text' : 'password'}
                            className="form-control"
                            name="password"
                            required
                            value={credentials.login.password}
                            onChange={(e) => handleInputChange('login', e)}
                            placeholder="Password"
                            id="login-password"
                          />
                          <span
                            className="position-absolute end-0 top-50 translate-middle-y mx-2"
                            onClick={() => togglePasswordVisibility('login')}
                          >
                            {credentials.login.showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>
                      <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary rounded-pill">
                          Sign In
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', border: '1px solid gray' }}>
                        <button className="btn">
                          <AiFillFacebook size={20} style={{ color: 'blue' }} /> Sign in with Facebook
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mt-2" style={{ width: '100%', border: '1px solid gray' }}>
                        <button className="btn">
                          <AiFillGoogleCircle size={20} style={{ color: 'green' }} /> Sign in with Google
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mt-2" style={{ width: '100%', fontSize: '12px' }}>
                        <span className="ms-2">Forgot password?</span>
                      </div>
                    </form>
                  ) : (

                    <form onSubmit={handleSubmit} style={{ border: 'none', paddingLeft: '10px' }}>
                      <div className="mb-3 row">
                        <div className="col-md-6" style={{ paddingLeft: '10px' }}>
                          <input
                            type="text"
                            className="form-control"
                            id="register-firstName"
                            name="firstName"
                            required
                            value={credentials.register.firstName}
                            onChange={(e) => handleInputChange('register', e)}
                            placeholder="First Name"
                            style={{ width: '160px' }}
                          />
                        </div>
                        <div className="col-md-6" style={{ padding: 0 }}>
                          <input
                            type="text"
                            className="form-control"
                            id="register-lastName"
                            name="lastName"
                            required
                            value={credentials.register.lastName}
                            onChange={(e) => handleInputChange('register', e)}
                            placeholder="Last Name"
                            style={{ width: '165px' }}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          name="email"
                          required
                          value={credentials.register.email}
                          onChange={(e) => handleInputChange('register', e)}
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="position-relative">
                          <input
                            type={credentials.register.showPassword ? 'text' : 'password'}
                            className="form-control"
                            name="password"
                            required
                            value={credentials.register.password}
                            onChange={(e) => handleInputChange('register', e)}
                            placeholder="Password"
                            id="register-password"
                          />
                          <span
                            className="position-absolute end-0 top-50 translate-middle-y mx-2"
                            onClick={() => togglePasswordVisibility('register')}
                          >
                            {credentials.register.showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="register-confirmPassword"
                          name="confirmPassword"
                          required
                          value={credentials.register.confirmPassword}
                          onChange={(e) => handleInputChange('register', e)}
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary rounded-pill">
                          Create Account
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', border: '1px solid gray' }}>
                        <button className="btn">
                          <AiFillFacebook size={20} style={{ color: 'blue' }} /> Create account with Facebook
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mt-2" style={{ width: '100%', border: '1px solid gray' }}>
                        <button className="btn">
                          <AiFillGoogleCircle size={20} style={{ color: 'green' }} /> Create account with Google
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>


            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={SignupImage} alt="Sign Up Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  );
}
