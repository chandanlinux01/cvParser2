import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { ResetSchema } from "./validationSchema";
import logo from "../assets/img/profileGenerator.png";

import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function ResetPassword() {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const [resetButtonProps, setResetButtonProps] = React.useState({
    text: "Reset Password",
    color: null
  });
  const location = useLocation();
  const currentUrl = location.pathname;

  const parts = currentUrl.split('/password-reset/');
  const newUrl = parts[1] || '';
  // using Formik
  const formInitialValues = {
 
    password: "",
    password1: ""
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: ResetSchema,
    onSubmit: (values,action) => {
      setIsLoading(true);

      const user = {
     
        password: values.password,
        password1: values.password1,
        
      };

      // Fetch API for New Password
      fetch(`${process.env.REACT_APP_BASE_URL}password-reset/${newUrl}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then((response) => {
        setIsLoading(false);

        if (response.ok) {
          if (response.ok) {
            setResetButtonProps({
              text: "Password Changed Successfully",
              color: "green"
            });
            setTimeout(() => {
              history.push('/signIn');
            }, 2000);
          
            
          } else {
            setResetButtonProps({
              text: "Password Reset Failed",
              color: "red"
            });
          }
          // Password updated successfully
          console.log("Password updated successfully");
        } else {
          // Handle error response
          console.log("Error updating password");
        }
      })
      .catch((error) => {
        // Handle network error
        console.log("Network error:", error);
      });
        action.resetForm();
    },
  });
  return (
    <>
   
        <Container fluid style={{backgroundColor:'#212221', height:'100vh', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <Row style={{backgroundColor:'#161816', width:'70%', height:'80%',borderRadius:'10px'}}>
            <Col style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}
            
            
          >

          <div>
             <img src={logo} alt="" srcset="" width="180" height="180"/>
          </div>
            <Form onSubmit={formik.handleSubmit}>
              <Row
                style={{
                  backgroundColor: "",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
        

                {/* PassWord*/}
                <Col sm={12} style={{ backgroundColor: "" }}>
                  {/*  First Name */}
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold",fontFamily:'Nunito Sans' }}>
                      New Password
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />

                    {formik.errors.password && formik.touched.password ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {" "}
                        {formik.errors.password}{" "}
                      </span>
                    ) : null}
                  </Form.Group>
                </Col>

                {/* Confirm Password*/}
                <Col sm={12} style={{ backgroundColor: "" }}>
                  {/* Last Name */}

                  <Form.Group className="" controlId="formBasicEmail1">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold",fontFamily:'Nunito Sans' }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="password"
                      placeholder="Confirm Your Password"
                      name="password1"
                      value={formik.values.password1}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password1 && formik.touched.password1 ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {" "}
                        {formik.errors.password1}{" "}
                      </span>
                    ) : null}
                  </Form.Group>
                </Col>

                <Col>
               
                </Col>
              </Row>


              <Button
              variant="primary btn-block"

              style={{
                backgroundColor: "#2ddb81",
                color: "#fff",
                border: "none",
                margin: "30px 0",
              }}
              className="generate_my_profile"
              type="submit"
              disabled={isLoading || resetButtonProps.color !== null}
            >
              {isLoading ? "Loading..." : resetButtonProps.text}
            </Button>

           
            </Form>
         

          </Col>
            </Row>
        </Container>
    </>
  )
}

export default ResetPassword