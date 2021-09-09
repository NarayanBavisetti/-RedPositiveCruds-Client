import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import AddForm from "./AddForm";
import { getUsers, sendMail } from "../Services/api";

import Checkbox from "@material-ui/core/Checkbox";
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

  const [workDays, setWorkDays] = useState([]);

  async function sendEmail(e) {
    e.preventDefault();
    alert("Mail send successfully");
    await sendMail(workDays);
  }

  const handleChange = (e) => {
    let newArray = [...workDays, e.target.value];
    if (workDays.includes(e.target.value)) {
      newArray = newArray.filter((day) => day !== e.target.value);
    }
    setWorkDays(newArray);
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
            {workDays.length ? (
              <Button onClick={sendEmail}>
                {" "}
                <i className="material-icons file_upload">&#xe2c6;</i>Send
              </Button>
            ) : null}
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
          {data.map((employee, index) => (
            <tr key={employee._id}>
              <td>
                {" "}
                <Checkbox
                  onChange={handleChange}
                  value={employee.name}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </td>
              <Employee employee={employee} index={index} setShow={setShow} />
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
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
