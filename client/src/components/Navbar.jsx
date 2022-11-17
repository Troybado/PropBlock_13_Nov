import React, { useState, useEffect } from "react";
import "../styling/Navbar/Navbar.scss";
import { Link } from "react-router-dom";
import { Avatar, Blockie } from "@web3uikit/core";
import { useMoralis } from "react-moralis";
import NavbarIcon from "../assets/framer-1.png";
import { message } from "antd";
import { LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const console = require("console-browserify");

const Navbar = (props) => {
  const [signedIn, setSignedIn] = useState(false);
  const [avatarClicked, setAvatarClicked] = useState(false);
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  let navigate = useNavigate();

  // disconnects the metamask wallet
  const disconnectWallet = async () => {
    try {
      await logout();
      await navigate("/");
    } catch (error) {
      message.error("Error: ", error);
    }
  };

  const showButtons = () => {
    try {
      let userButtons = document.getElementById("userButtons");
      if (userButtons.style.display !== "flex") {
        userButtons.style.display = "flex";
      } else {
        userButtons.style.display = "none";
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    document.addEventListener("click", function handleClickOutsideBox(event) {
      const userButtons = document.getElementById("userButtons");
      const avatarIcon = document.getElementById("avatarIcon");

      if (
        !userButtons.contains(event.target) &&
        !avatarIcon.contains(event.target)
      ) {
        userButtons.style.display = "none";
      }
    });
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <div className="Navbar">
          <div className="leftSide">
            <img src={NavbarIcon} alt="NavbarIcon" />
            <Link to="/" className="homeLink">
              <h2>PropBlockx</h2>
            </Link>
          </div>
          <div className="rightSide">
            <nav>
              {window.location.pathname === "/properties" ? (
                <Link to="/properties" className="link">
                  <div className="current">Properties</div>
                </Link>
              ) : (
                <Link to="/properties" className="link">
                  <div>Properties</div>
                </Link>
              )}
              {window.location.pathname === "/contactus" ? (
                <Link to="/contactus" className="link">
                  <div className="current">Contact Us</div>
                </Link>
              ) : (
                <Link to="/contactus" className="link">
                  <div>Contact Us</div>
                </Link>
              )}
              {window.location.pathname === "/aboutus" ? (
                <Link to="/aboutus" className="link">
                  <div className="current">About</div>
                </Link>
              ) : (
                <Link to="/aboutus" className="link">
                  <div>About</div>
                </Link>
              )}
              <div className="avatarSection" id="avatarIcon">
                <Avatar
                  isRounded
                  theme="image"
                  className="avatar"
                  onClick={() => {
                    showButtons();
                  }}
                />
                <div className="userButtons" id="userButtons">
                  <div
                    className="dashboardButton userButton"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard <ProfileOutlined />
                  </div>
                  <div
                    className="logoutButton userButton"
                    onClick={() => disconnectWallet()}
                  >
                    Logout <LogoutOutlined />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      ) : (
        <div className="Navbar">
          <div className="leftSide">
            <img src={NavbarIcon} alt="NavbarIcon" />
            <Link to="/" className="homeLink">
              <h2>PropBlockX</h2>
            </Link>
          </div>
          <div className="rightSide">
            <nav>
              {window.location.pathname === "/properties" ? (
                <Link to="/properties" className="link">
                  <div className="current">Properties</div>
                </Link>
              ) : (
                <Link to="/properties" className="link">
                  <div>Properties</div>
                </Link>
              )}

              {window.location.pathname === "/aboutus" ? (
                <Link to="/aboutus" className="link">
                  <div className="current">About</div>
                </Link>
              ) : (
                <Link to="/aboutus" className="link">
                  <div>About</div>
                </Link>
              )}
              {window.location.pathname === "/contactus" ? (
                <Link to="/contactus" className="link">
                  <div className="current">Contact Us</div>
                </Link>
              ) : (
                <Link to="/contactus" className="link">
                  <div>Contact Us</div>
                </Link>
              )}
              <Link to="/signup">
                <button className="getStarted">Get Started</button>
              </Link>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
