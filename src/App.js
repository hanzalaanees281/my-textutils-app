
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const changeMode = () => {
    if (mode === `light`) {
      setMode(`dark`)
      document.body.style.backgroundColor = `#021737`;
      showAlert(`dark mode enabled`, `success`);
    } else {
      setMode(`light`)
      document.body.style.backgroundColor = `white`
      showAlert("light mode enabled", "success")
    }
  }
  return (
    
      
      <>
      <Router>
        <Navbar logo="HANZALA" home="HOME" about="ABOUT" contact="CONTACT" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
          <Route  exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Try TextUtils- word counter, character counter" mode={mode} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );

}
export default App