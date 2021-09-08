import { Form, Button } from "react-bootstrap"

import {useContext, useState} from 'react';

const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [name, setName] = useState(theEmployee.name);
    const [email, setEmail] = useState(theEmployee.email);
    const [hobbies, setHobbies] = useState(theEmployee.hobbies);
    const [number, setNumber] = useState(theEmployee.number);


    const updatedEmployee = {id, name, email, hobbies, number}

    const handleSubmit = (e) => {
        e.preventDefault();
        // updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
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
                    onChange={(e)=> setHobbies(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit User
            </Button>
        </Form>

     )
}

export default EditForm;