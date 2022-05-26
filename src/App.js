import { useState } from 'react';
import './App.css';
import ALert from './components/ALert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  // const [text, setText] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0c3b6a'
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - DarkMode"
    //   setInterval(() => {
    //     document.title = "TextUtils is Amazinggg!!"
    //   }, 2000);
    //   setInterval(() => {
    //     document.title = "Install TextUtils now!"
    //   }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - DarkMOde"
    }
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <ALert alert={alert}/>
      <div className="container my-3">
          {/* <Routes> */}
              {/* <Route exact path="/about" element={<About/>}/> */}
              {/* <Route exact path="/" element={}/> */}
              <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
          {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App;
