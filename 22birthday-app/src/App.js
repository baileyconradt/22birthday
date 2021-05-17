import './App.css';
import { useState } from "react"
import {Button} from 'react-bootstrap';
import {confettiCannon, sideConfetti} from './confetti.js';
import {CreateMessage} from './CreateMessage.js';

import 'bootstrap/dist/css/bootstrap.min.css';

sideConfetti()

function App() {
  const [link, setLinkText] = useState(undefined);

  let currentUrl = window.location.href;
  console.log(currentUrl);

  function setLink(link){
    console.log(link);
    setLinkText(currentUrl + link)
  }

  return (
    <div className="App">
      <header className="App-header">
        <a target="_blank" href='https://baileyconradt.com'><img src='https://media.giphy.com/media/xT1R9G7vPViOVd0faE/giphy.gif' /></a>
        <p>
         Shake it off!
        </p>
        <Button variant="danger" onClick={confettiCannon}>Press For Confetti</Button>
        <CreateMessage setLink={setLink} />
        <p>Link: </p>
        {link ? <p>{link}</p> : <></>}
      </header>
    </div>
  );
}


export default App;