import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { FaLock } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { forgetSchema } from "./validationSchema";

function ForgotPassword() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [resetButtonProps, setResetButtonProps] = React.useState({
    text: "Reset Password",
    color: null,
  });

  // Formik Starts
  const formInitialValues = {
    email: "",
  };
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: forgetSchema,
    onSubmit: (values, action) => {
      console.log("forgot", values);
      setIsLoading(true);

      const user = {
        email: values.email,
      };
      fetch(`${process.env.REACT_APP_BASE_URL}password-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          setIsLoading(false);
          if (response.ok) {
            setResetButtonProps({
              text: "Link Sent Successfully",
              color: "green",
            });
          } else {
            setResetButtonProps({
              text: "Password Reset Failed",
              color: "red",
            });
          }
          return response.json();
        })
        .then((data) => {})
        .catch((e) => {
          console.log("errors", e);
        });
      action.resetForm();
    },
  });
  // Formik Ends

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#212221",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            backgroundColor: "#161816",
            width: "70%",
            height: "80%",
            borderRadius: "10px",
          }}
        >
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="forgor_icon">
              <FaLock />
            </div>

            <div className="forgot_pswrd_heading">
              <h5>Reset Password</h5>
            </div>
            <div className="forgot_pswrd_para">
              <p>
                Enter your email address in the form below and we will send your
                further instructions on email
              </p>
            </div>

            <Form
              onSubmit={formik.handleSubmit}
              style={{ backgroundColor: "", width: "70%" }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
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
              <Button
                style={{
                  width: "100%",
                  backgroundColor: resetButtonProps.color,
                }}
                type="submit"
                className="generate_my_profile"
                disabled={isLoading || resetButtonProps.color !== null}
              >
                {isLoading ? "Loading..." : resetButtonProps.text}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ForgotPassword;
