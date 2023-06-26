import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";


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
// File Pond
import { FilePond, registerPlugin } from "./react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginImageEdit,FilePondPluginFileValidateType);

function Template() {
  // File Pond
  const pondRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')

  // console.log("file is", files);
  useEffect(() => {
    // console.log("FilePond instance has initialized", pondRef.current);
  }, []);


  
  const handleUpdateFiles = (fileItems) => {
    setFiles(fileItems.map((fileItem) => fileItem.file));
  };
  //File Pond ENds

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    
  // Create a new object with the current form data
  const formData = {
    files: files,
    company: company,
    website: website,
  };
  
  // console.log('file is',files);
    // Add the new form data to the existing data array
    // const updatedData = [...storedData, formData];

// Save the updated data array in localStorage
localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <>
  
    <Container fluid>
        <Row>
          <Col>
         Template Page
        
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default Template;
