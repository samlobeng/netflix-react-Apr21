import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button} from "react-bootstrap"
import {useState} from "react"
import CommentList from "./CommentList";

const SingleMovie = (props) => {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
console.log(props)
  return (
    <>
      <img src={props.img} className="thumbnail" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <CommentList movieId={props.id}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMovie;
