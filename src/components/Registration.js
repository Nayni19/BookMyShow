import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import Swal from 'sweetalert2'
const axios = require('axios');

function Registration() {
    const [username, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function clearInput() {
        setUsername("");
        setEmailAddress("");
        setPassword("");
    }

    async function UserPost() {
        const userDetails = {
            "username": username,
            "email": emailAddress,
            "password": password
        }
        await axios.post('https://bookmyshow-backend-1.herokuapp.com/user-register', userDetails)
            .then((data) => {
                Swal.fire({
                    title: `<strong>${data.data.message}!</strong>`,
                    icon: 'success',
                    showCloseButton: true,
                })
                clearInput();
            })
            .catch((err) => {
                Swal.fire({
                    title: `<strong>${err.message}!</strong>`,
                    icon: 'error',
                    showCloseButton: true,
                })
            });


       
    }
    return (
        <div>
            <Container style={{ padding: "5%" }}>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" onClick={UserPost}>
                        Submit
                    </Button>
                </Form>
            </Container>

        </div>
    );
}

export default Registration;
