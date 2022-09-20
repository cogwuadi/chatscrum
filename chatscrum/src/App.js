
import React from 'react';
import './App.css';
import Home from "./home/home.jsx";
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from './sign-up/sign-up'
import SignIn from './sign-in/sign-in'
import Scrumboard from './scrumboard/scrumboard';

// class App extends React.Component {
//   render () {
//       return (
//         <div className="App">
//           <Routes>
//             <Route exact path = "/" Component={Home} />
//             <Route path = "/signin" Component={SignIn} />
//             <Route path = "/signup" Component={SignUp} />
//           </Routes>
       
//         </div>         
//       );
//   }
// }



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