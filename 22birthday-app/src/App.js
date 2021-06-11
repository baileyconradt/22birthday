import './App.css';
import { useState } from "react"
import { Button, Jumbotron, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { confettiCannon, sideConfetti } from './confetti.js';
import { CreateMessage } from './CreateMessage.js';
import { GetInfo } from './GetInfo.js';
import { firestore } from './firebaseStuff';


import 'bootstrap/dist/css/bootstrap.min.css';



sideConfetti()

function App() {
  const [link, setLinkText] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  let currentUrl = window.location.href;
  console.log(currentUrl);

  function setLink(link) {
    //console.log(link);
    setLinkText(currentUrl + link)
  }

  let messageUrl = String(window.location.pathname).substring(1);

  function copyLink() {
    var copyText = document.getElementById("linkToCopy");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    //alert("Copied the text: " + copyText.value);
  }

  if (messageUrl) {

    const messageRef = firestore.collection('messages').doc(messageUrl);

    messageRef.get().then((doc) => {
      if (doc.exists) {
        //console.log("Document data:", doc.data().message);
        setMessage(doc.data().message);
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });

    return (<div className="App">
      <header className="App-header">


        <Container fluid>
          <Row>
            <Col className='m-2'><div className="iframeContainer"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/AgFeZr5ptV8?start=40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></Col>
          </Row>
          <Row>
            <Col><Jumbotron className='m-5'>
              <h1>It's time to celebrate!</h1>
              <p>{message}</p>
            </Jumbotron></Col>
          </Row>
        </Container>
      </header>
    </div>)
  }
  else {
    return (
      <div className="App">
        <header className="App-header">

          <Container fluid>
            <Row>
              <Col className='m-2'><div className="iframeContainer"><img className="responsive-iframe" src='https://media.giphy.com/media/6KeFLNtxBAfoA/giphy.gif' /></div></Col>
            </Row>
            <Row>
              <Col><Jumbotron className='m-5'>
                <h1>It's time to celebrate!</h1>
                {link ? <div>
                  <p>Copy this link to share your birthday message: </p>
                  <InputGroup className="mb-3">
                    <FormControl
                      onClick={(event) => event.target.select()}
                      id='linkToCopy'
                      value={link}
                      readOnly
                    />
                    <InputGroup.Append>
                      <Button onClick={copyLink}>Copy</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  {/* <input type="text" id="linkToCopy">Copy this link to share your birthday message: {link}</input>  */}
                </div>
                  : <div><p>
                    Want to send someone a birthday message for turning 22? Click the button below to create a personalized message!
              </p>
                    <p>
                      <CreateMessage setLink={setLink} />
                    </p></div>}

              </Jumbotron></Col>
            </Row>
            {/* <Button variant="danger" onClick={confettiCannon}>Press For Confetti</Button> */}
          </Container>
          <GetInfo/>
        </header>
      </div>
    );
  }
}


export default App;