import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import AddForm from "./AddForm";
import { getUsers } from "../Services/api";

const EmployeeList = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = async () => {
    const response = await getUsers();
    setData(response.data);
  };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Users</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Users</span>
            </Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Check Box</th>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {data.map((employee,index) => (
            <tr key={employee.id}>
              <Employee employee={employee} index={index}  />
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm setShow={setShow} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button Yeee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
