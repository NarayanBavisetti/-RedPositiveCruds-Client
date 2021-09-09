import {useState, useEffect } from "react";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import { deleteUserData } from "../Services/api";


const Employee = ({ employee, index }) => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  useEffect(() => {
    handleClose();
  }, [employee]);

  async function deleteUser(id) {
    await deleteUserData(id);
  }

  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_USER_ID}`)
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // }

  return (
    <>

      <td>{index + 1}</td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.hobbies}</td>
      <td>{employee.number}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => deleteUser(employee._id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
