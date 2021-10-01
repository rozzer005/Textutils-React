import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-white');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(cls === 'primary' || cls === 'danger' || cls === 'success' || cls === 'warning' || cls === 'dark'){
      setMode('dark');
    }else{
      setMode('light');
    }
    
    if(mode === 'light'){
     // setMode('dark');
      document.body.style.backgroundColor="#090c56";
      showAlert("Dark mode enabled","success");
    }else{
     // setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled","success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    <div className="container my-3">
  
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm  showAlert={showAlert} heading="Try Textutils - Word counter, Character counter, Remove extra spaces" mode={mode} />
          </Route>
        </Switch>
        </div>
    </Router>
   
    </>
    
  );
}

export default App;
