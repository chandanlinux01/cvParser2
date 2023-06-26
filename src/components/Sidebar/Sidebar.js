import React, { Component, useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "../../assets/img/profile_img.jpg";
import site from "../../assets/img/profileGenerator2.png";


function Sidebar({ color, image, routes }) {
  const [username,setUsername] = useState();
  useEffect(()=>{
    setUsername(JSON.parse(localStorage.getItem('userName')))
  },[])
  
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar">
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper" style={{ backgroundColor: "#1b1b1b" }}>
        <div className="logo d-flex align-items-center justify-content-start" style={{height:'100px'}}>
          <a
            href=""
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={site} width='150' height='150' alt="..." />
            </div>
          </a>
         
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>

        {/* Logout */}

        <div
          style={{
            backgroundColor: "",
            width: "260px",
            position: "fixed",
            bottom: "50px",
            padding:'0 10px'
          }}
        >

        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor:''
      
        }}>
        <div className="login_img">
        <img
          src={logo}
          alt=""
          srcset=""
          style={{ width: "40px", borderRadius: "50px", backgroundColor:'' }}
        />
      </div>

      <div className="profile_content" style={{backgroundColor:'',marginLeft:'10px'}}>
        <h6>{(username && username.fname) ? username.fname : 'User Name'}</h6>
        <p>{(username && username.email) ? username.email : 'Email'}</p>
      </div>
        </div>
       
   
      
          
        </div>

        
      </div>
    </div>
  );
}

export default Sidebar;
