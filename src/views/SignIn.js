import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import site from "../assets/img/profileGenerator.png";

import google from "../assets/img/google.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { SignInSchema } from "./validationSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { GoogleLogin } from "react-google-login";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Sign In"); // Add button text state
  const [buttonColor, setButtonColor] = useState("#405cf5"); // Add button color state
  let history = useHistory();
  const [user, setUser] = useState(null);

  //Sign in with Google
  // Google
  {/* 
  const responseGoogle = (response) => {
    console.log("res is", response);
    const user = {
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      username: "",
      email: response.profileObj.email,
      password: "Aish@123",
      password1: "Aish@123",
    };
    // console.log('first name is',first_name);

    fetch(`${process.env.REACT_APP_BASE_URL}register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((e) => {
        console.log("errors", e);
      });
    localStorage.setItem(
      "login",
      JSON.stringify({
        login: true,
        token: response.tokenObj.id_token,
      })
    );
    localStorage.setItem(
      "userName",
      JSON.stringify({
        fname: response.profileObj.name,
        email: response.profileObj.email,
      })
    );
    if (response.accessToken) {
      toast.success("Success Notification !");
      history.push("/admin/profile-generator");
    }
  };
  */}

  const formInitialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: SignInSchema,
    onSubmit: (values, action) => {
      setLoading(true);
      setButtonText("Please wait"); // Update button text
      setButtonColor("#ccc"); // Update button color
      const user = {
        email: values.email,
        password: values.password,
      };

      fetch(`${process.env.REACT_APP_BASE_URL}login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data arte", data.error);
          setLoading(false);
          setButtonText("Sign In"); // Reset button text
          setButtonColor("#2ddb81"); // Reset button color
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: data.access,
            })
          );
          localStorage.setItem(
            "userName",
            JSON.stringify({
              fname: data.first_name,
              email: data.email,
            })
          );
          if (data.access) {
            toast.success("Success Notification !");
            history.push("/admin/profile-generator?type=");
          } else {
          }
          setUser(data.access);
          if (data.detail) {
            toast.error(data.detail, {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
            });
          }

          if (data.error) {
            toast.error(data.error, {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
            });
          }
        })
        .catch((e) => {
          console.log("errors", e);
        });
      action.resetForm();
    },
  });

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("login"));
    if (!login) {
      history.push("/signIn");
    } else {
      history.push("/admin/profile-generator?type=");
    }
  }, [history]);

  function googleSignIn() {
    fetch(`${process.env.REACT_APP_BASE_URL}google/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.access) {
          toast.success("Success Notification !");
          history.push("/admin/dashboard ");
        }
        setUser(data.access);
        if (data.detail) {
          toast.error(data.detail, {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          });
        }
      })
      .catch((e) => {
        console.log("errors", e);
      });
  }

  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "", height: "100vh", padding: "0px" }}
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Row style={{ backgroundColor: "" }}>
          <Col
            md={6}
            style={{
              backgroundColor: "#161816",
              padding: "40px",
              height: "100vh",
              position: "relative",
            }}
          >
            <img
              src={site}
              alt=""
              srcset=""
              width="150"
              style={{ marginLeft: "50px", marginTop: "-50px" }}
            />

            <div
              style={{
                border: "",
                width: "70%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <h1
                style={{
                  fontWeight: "800",
                  fontFamily: "Nunito Sans",
                  color: "#fff",
                }}
              >
                Get started with <br /> ProfileGenerator....{" "}
              </h1>
              <p
                style={{ color: "gray", margin: "30px 0", fontWeight: "bold" }}
              >
                Join hundreds of job seekers who use Profile Generator to submit
                better job applications in seconds—not hours.
              </p>
              <p style={{ color: "gray", fontWeight: "bold" }}>
                Don't have an account?{" "}
                <span
                  style={{
                    color: "#2ddb81",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/signup" className="sign_up_link">
                    {" "}
                    Sign Up{" "}
                  </Link>
                </span>{" "}
              </p>
            </div>
          </Col>

          {/* Column 2 */}

          <Col
            md={6}
            style={{
              backgroundColor: "#212221",
              padding: "40px",
              height: "100vh",
              fontFamily: "Nunito Sans",
            }}
          >
            <div
              style={{
                border: "",
                width: "70%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Form onSubmit={formik.handleSubmit}>
                {/* Email */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    className="signin_form"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.email && formik.touched.email ? (
                    <span style={{ color: "red", fontSize: "13px" }}>
                      {" "}
                      {formik.errors.email}{" "}
                    </span>
                  ) : null}
                </Form.Group>

                {/* Password */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    className="signin_form"
                    type="password"
                    placeholder="Enter Password...."
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link
                      style={{ color: "gray", fontFamily: "Nunito Sans" }}
                      to="/forgot-password"
                    >
                      {" "}
                      Forgot Password ?{" "}
                    </Link>
                  </div>

                  {formik.errors.password && formik.touched.password ? (
                    <span style={{ color: "red", fontSize: "13px" }}>
                      {" "}
                      {formik.errors.password}{" "}
                    </span>
                  ) : null}
                </Form.Group>

                <Button
                  variant="primary btn-block"
                  type="submit"
                  style={{
                    backgroundColor: buttonColor, // Use button color state
                    color: "#fff",
                    border: "none",
                    margin: "30px 0",
                  }}
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? "Please wait..." : buttonText}{" "}
                  {/* Use button text state */}
                </Button>

                {/* 
                <GoogleLogin
                  clientId="986930600127-u1qbih3n80r8qr720o2a77ja0hnouq3c.apps.googleusercontent.com"
                  buttonText="Sign In With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                */}
              </Form>
              {/* 
              <GoogleButton style={{width:'100%'}}
                  onClick={googleSignIn}
              />
              */}
            </div>
        
            </Col>
        
        </Row>
      </Container>
    </>
  );
}

export default SignIn;
