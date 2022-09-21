
import React from 'react';
import './App.css';
import Home from "./home/home.jsx";
import { Route, Routes } from 'react-router-dom';

import SignUp from './sign-up/sign-up'
import SignIn from './sign-in/sign-in'
import Scrumboard from './scrumboard/scrumboard';

function App() {
  return (

    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/scrumboard" element={<Scrumboard />} />
      </Routes>
    </div>

  );
}


export default App;