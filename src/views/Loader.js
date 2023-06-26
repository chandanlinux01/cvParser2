import Spinner from "react-bootstrap/Spinner";
import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Loader() {
  return (
    <>
      <div className="loader-container">
        <Spinner
          style={{ color: "#405cf5" }}
          animation="border"
          role="status"
        />
      </div>
    </>
  );
}

export default Loader;
