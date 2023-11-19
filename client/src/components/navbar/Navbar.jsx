//importing packages
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import decode from "jwt-decode";
import Dropdown from "react-bootstrap/Dropdown";

//importing style
import logo from "../../assets/logo.png";
import searchicon from "../../assets/searchicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

//importing components
import Avatar from "./Avatar";
import { setCurrentUser } from "../../actions/currentUser";

//main function goes here
const Navbar = (src) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  var User = useSelector((state) => state.fetch_current_userReducer);
  const [email] = useState(User?.result?.email);
  var currentplan = User?.result?.plan;
  var stat = User?.status;
  var premiumcontent = "Get Premium";
  // var srcofPic = src;
  if (currentplan === "Free" || currentplan === "NULL") {
    premiumcontent = "Get Premium";
  } else if (currentplan === "Silver" && stat === "no") {
    premiumcontent = "Upgrade";
  } else if (currentplan === "Gold" && stat === "no") {
    premiumcontent = "!";
  }
  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout({ email }));
    dispatch({ type: "LOGOUT" });
    dispatch(setCurrentUser(null));
    Navigate("/");
  };


  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);


  // useEffect(() => {
  //   const existingtoken = User?.token;
  //   if (existingtoken) {
  //     const decodedToken = decode(existingtoken);
  //     if (decodedToken.exp * 1000 < new Date().getTime()) {
  //       dispatch(setCurrentUser(null));
  //     }
  //   }
  // }, [dispatch]);
  useEffect(() => {
    const existingToken = User?.token;
    if (existingToken) {
      const decodedToken = decode(existingToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(setCurrentUser(null));
      }
    }
  }, [User?.token, dispatch]);
  
  // <script async src="https://cse.google.com/cse.js?cx=e532ff84caaf848b5">
  // </script>

  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-md fixed-top bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="official logo" width="150px" ></img>
          </Link>
          <Dropdown
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around "
            id="drops"
            type="Button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Dropdown.Toggle
              style={{
                backgroundColor: "#faf7f7",
                border: "none",
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#ff7003", width: "20px", padding: "0" }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "410px" }}>
              <Dropdown.Item href="https://gi009.000webhostapp.com/">
                <Link to="/About" className="nav-btn nav-item">
                  About
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="">
                <Link to="/pricing" className="nav-btn nav-item">
                  Pricing
                </Link>
              </Dropdown.Item>
              <ul type="none">
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="info"
                      id="dropdown-basic"
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        color: "white",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          fontSize: "13px",
                          fontWeight: "600",
                          marginLeft: "-10px",
                        }}
                      >
                        Project
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <a
                          class="dropdown-item"
                          href="https://prajwal160.github.io/portfolio-website/"
                        >
                          My Portfolio
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        {" "}
                        <a
                          class="dropdown-item"
                          href="https://facebook-messenger-clone-8258b.firebaseapp.com/"
                        >
                          Facebook Messenger Clone
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <a class="dropdown-item" href="https://razorpay-clone-fxew.onrender.com/">
                          RazorPay clone
                        </a>
                      </Dropdown.Item>                     
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <form
                class="d-flex"
                role="search"
                id="searchform"
                style={{ marginLeft: "24px", width: "50%" }}
              >
                <img
                  src={searchicon}
                  alt="searchicon"
                  width="18px"
                  className="searchicon"
                />
                <input
                  type="text"
                  name="searchbox"
                  id="searchinput"
                  placeholder="Search..."
                  class="form-control me-2"
                  autoComplete="off"
                />
              </form>
              <br />
              <Dropdown.Item href="">
                {User === null ? (
                  <>
                    <Link
                      to="/login"
                      className="nav-links nav-btn nav-item fonting"
                      style={{ marginLeft: "21px" }}
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="nav-links nav-btn nav-item fonting"
                      id="special-button"
                      style={{
                        marginLeft: "0px",
                        padding: "8px 14px 7px 14px",
                      }}
                    >
                      Sign up
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="avatar" style={{ textAlign: "center" }}>
                      <Avatar
                        backgroundColor="#009dff"
                        px="55px"
                        py="7px"
                        borderRadius="5px"
                        color="white"
                      >
                        <Link
                          to={`/users/${User?.result?._id}`}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {User.result.name.charAt(0).toUpperCase()}
                        </Link>
                      </Avatar>
                    </div>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Link
                      className="nav-links nav-btn nav-item fonting"
                      onClick={handleLogout}
                      id="special-button"
                      style={{
                        marginLeft: "20px",
                        padding: "3px 30px 7px 34px",
                      }}
                    >
                      Log out
                    </Link>
                  </>
                )}
              </Dropdown.Item>

              <Dropdown.Item
                href="#/action-3"
                style={{ marginBottom: "15px", marginLeft: "12px" }}
              >
                {currentplan === "Gold" ? (
                  <></>
                ) : (
                  <>
                    <Link
                      to="/pricing"
                      className="nav-links nav-btn nav-item fonting"
                      id="special-button"
                      style={{
                        marginLeft: "8px",
                        padding: "5px 30px 7px 30px",
                      }}
                    >
                      {premiumcontent}
                    </Link>
                  </>
                )}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <button
            class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            id="toggle-button"
            type="Button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>


          </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link
                  to="https://gi009.000webhostapp.com/"
                  target="_blank"
                  className="nav-btn nav-item"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="nav-btn nav-item">
                  Pricing
                </Link>
              </li>
              <li class="dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="https://prajwal160.github.io/portfolio-website/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-item nav-btn"
                >
                  Projects
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://prajwal160.github.io/portfolio-website/"
                    >
                      My Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://facebook-messenger-clone-8258b.firebaseapp.com/"
                    >
                      Facebook Clone
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://razorpay-clone-fxew.onrender.com/"
                    >
                      RazorPay Clone
                    </a>
                  </li>                       
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search" id="searchform">
              <img
                src={searchicon}
                alt="searchicon"
                width="18px"
                className="searchicon"
              />

              <input
                type="text"
                name="searchbox"
                id="searchinput"
                placeholder="Search..."
                class="form-control me-2"
                autoComplete="off"
              />
            </form>
            &nbsp;&nbsp;
            {User === null ? (
              <>
                <Link
                  to="/login"
                  className="nav-links nav-btn nav-item fonting"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="nav-links nav-btn nav-item fonting"
                  id="special-button"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>             
                <Link to={`/users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }}>
        {User?.result?.avatar ? (
          <img
            src={User?.result?.avatar}
            alt=""
            style={{
              borderRadius: '50%',
              width: '37px',
              height: '37px',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor: '#009dff',
              width: '37px',
              height: '37px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            {User?.result?.name.charAt(0).toUpperCase()}
          </div>
        )}
      </Link>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <Link
                  className="nav-links nav-btn nav-item fonting"
                  onClick={handleLogout}
                  id="special-button"
                >
                  Log out
                </Link>
              </>
              /* <Link to={`/users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }}>
        {User?.result?.avatar ? (
          <img
            src={User?.result?.avatar}
            alt=""
            style={{
              borderRadius: '50%',
              width: '37px',
              height: '37px',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor: '#009dff',
              width: '37px',
              height: '37px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            {User?.result?.name.charAt(0).toUpperCase()}
          </div>
        )}
      </Link>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
      <Link
        className="nav-links nav-btn nav-item fonting"
        onClick={handleLogout}
        id="special-button"
      >
        Log out
      </Link>*/
            )}
            {currentplan === "Gold" ? (
              <></>
            ) : (
              <>
                <Link
                  to="/pricing"
                  className="nav-links nav-btn nav-item fonting"
                  id="special-button"
                >
                  {premiumcontent}
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
