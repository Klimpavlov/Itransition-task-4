import React from "react";
import {Routes, Route} from 'react-router-dom';

import {Homepage} from './pages/Homepage'
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
    </div>

  );
}

export default App;
