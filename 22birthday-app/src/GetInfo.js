import './App.css';
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { AiOutlineInfoCircle } from "react-icons/ai";



export function GetInfo(props) {
    const [show, setShow] = useState(false)



    return (<>
        <a onClick={e => setShow(true)}><AiOutlineInfoCircle id="infobutton" size={22} color='#212529'/></a>
        <Modal show={show} onHide={e => setShow(false)}>
            <Modal.Header>
                <Modal.Title>About the App</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p id='info-paragraph'>Hi there! I'm Bailey, and I'm a web developer who is also a big fan of Taylor Swift! This app is solely to send fun messages to your friends and family, and for that reason it doesn't collect or store any personal data from you. Any reference to Taylor Swift is her own property, and I in no way intend to profit from this website.
                If you have any comments or concerns about the website, please feel free to check out my personal website to get in touch! -Bailey</p>
                <a target="_blank" href='https://baileyconradt.com'>baileyconradt.com</a>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={e => setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>)
}