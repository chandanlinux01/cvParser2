import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

function ProtectedRout(props) {
     const {Component} = props
     let history = useHistory();
     useEffect(()=>{
         let login = JSON.parse(localStorage.getItem("login"));
        //  console.log(login);
         if(!login){
          history.push("/signIn");
         } else{
          history.push("/admin/profile-generator");
         }
     },[history])
  return (
    <div>
    <Component/>
    </div>
  )
}

export default ProtectedRout