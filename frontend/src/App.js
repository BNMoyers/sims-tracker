//dependencies
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';


//imports
import { SignInSide as Login } from './Onboarding/SignInSide';
//app
function App(props) {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

//export
export default App;
