import './App.css';
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import firebase from 'firebase'
const { firestore } = require('./firebaseStuff')

const messagesRef = firestore.collection('messages');
//const storage = firebase.storage().ref()

function createMessage(message, setShow, setMessageRef, setLink) {
    //console.log('test');
    let messageRef = undefined;

    messagesRef.add({
        message: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(res => {
        console.log(res.id);
        setMessageRef(res.id);
        setLink(res.id);
    });
    setShow(false);
    
}

export function CreateMessage(props) {
    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);

    const [messageRef, setMessageRef] = useState(undefined);
    return (<>
        <Button onClick={e => setShow(true)}>Create Message</Button>
        <Modal show={show} onHide={e => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Create Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} id='form'>

                    <Form.Group controlId='message'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" required placeholder="Type your birthday message here!"></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Type a birthday message here!
            </Form.Control.Feedback>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={e => {
                    createMessage(document.getElementById('message').value, setShow, setMessageRef, props.setLink, () => {
                });
                
                }}>Create Message</Button>
            </Modal.Footer>
        </Modal>
    </>)
}