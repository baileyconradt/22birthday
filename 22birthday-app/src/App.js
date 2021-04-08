import './App.css';
import {Button} from 'react-bootstrap';
import {confettiCannon, sideConfetti} from './confetti.js'

import 'bootstrap/dist/css/bootstrap.min.css';

sideConfetti()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a target="_blank" href='https://baileyconradt.com'><img src='https://media.giphy.com/media/xT1R9G7vPViOVd0faE/giphy.gif' /></a>
        <p>
         Shake it off!
        </p>
        <Button variant="danger" onClick={confettiCannon}>Press For Confetti</Button>
      </header>
    </div>
  );
}

export default App;
