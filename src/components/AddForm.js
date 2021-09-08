import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { addUsers } from "../Services/api";


const AddForm = (props) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = { name, email, phone, hobbies };
     props.setShow(false);
     await addUsers(data);
  };

  return (
    <Form  onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Hobbies"
          rows={3}
          name="hobbies"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New User
      </Button>
    </Form>
  );
};

export default AddForm;
