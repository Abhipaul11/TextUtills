// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
// import React, {useState} from 'react';
import React from "react";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");
      document.title='TextUtills-dark-mode'
    }
    else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode enabled", "success");
     document.title='TextUtills-light-mode'
    }
  }
  return (
    <>

      {/* <Navbar title="TextUtills" aboutText="About TextUtills"/> */}
      {/* <Navbar/>  if components not created then go to app.js and write defaultProps */}
      {/* <BrowserRouter> */}
      <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
          {/* <Routes>
          <Route exact path="/about" element={ <About />}></Route>
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />}></Route>
          </Routes> */}
          
                            
        <TextForm  showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />
        {/* <About/> */}
      </div>
      {/* </BrowserRouter> */}
    </>

    // <>
    // <h1>This is Abhi</h1>
    // <div classNameNameName="App">
    //   <header classNameNameName="App-header">
    //     <img src={logo} classNameNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Abhi
    //     </a>
    //   </header>
    // </div>
    // </>
  );
}

export default App;
