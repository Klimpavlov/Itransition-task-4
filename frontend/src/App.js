// import React, {useState, useEffect} from "react";
import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

import {Homepage} from './pages/Homepage'
import {SignUp} from './pages/SignUp'
import {SignIn} from './pages/SignIn'



function App() {
    // const [data, setData] = useState(null);
    //
    // useEffect(() => {
    //     fetch('/api/users')
    //         .then(response => response.json())
    //         .then(response => setData(response))
    // }, []);
    //
    // console.log(data);

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    </div>

  );
}

export default App;
