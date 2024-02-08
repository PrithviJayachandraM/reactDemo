/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


/*
import './App.css';
import React, { useState } from 'react';

function App() {

  const paragraphStyle = {
    color: 'purple'
  };
  function changeText() {
    if(document.getElementById("toggle").innerHTML=="I am fine"){
      document.getElementById("toggle").innerHTML = "Dead Inside"

    }
    else{
      document.getElementById("toggle").innerHTML="I am fine"
  };  
  }
  const [count, anyfunction] = useState(0);

  function incrementCount1(){
    anyfunction(count + 1);
  }
  function decrementCount1(){
    anyfunction(count - 1);

  }

  return (
  <body className='App-header'>
     <div style = {{color:'red'}} className="App">
      <h1>This is Prithvi</h1>


      <h2> Konichiwa </h2>
    </div>
    <div style={paragraphStyle}  className="App">
      <h2 id = "toggle" className="App-logo">I am fine</h2>
      <button onClick={changeText}>
        Change the text
      </button>
    </div>

    <div>
    <p>Count: {count}</p>
      <button onClick={incrementCount1}>Increase Count 1</button>
      <button onClick={decrementCount1}>Decrease Count 1</button>
    </div>


    

  </body>


  );

}*/




import React, { useState } from 'react';
import axios from 'axios';
 
function App() {
    const [message, setMessage] = useState('');
 
    const fetchMessage = async () => {
    const response = await axios.get('http://localhost:5000/api/message');
    sethessage(response.data.message)
    };
 
    return (
        <div ClassName = "App">
            <header className = "AppHeader">
                <p>{message}</p>
                <button onClick={fetchMessage}>Get Message</button>
            </header>
        </div>
    );
}

export default App;

