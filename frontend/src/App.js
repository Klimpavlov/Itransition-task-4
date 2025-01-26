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
        {/*<div>*/}
        {/*    {*/}
        {/*    !data ? "Loading" : data.map(user => (*/}
        {/*        <div key={user.id}>*/}
        {/*            <p>{user.id}</p>*/}
        {/*            <p>{user.email}</p>*/}
        {/*        </div>*/}
        {/*    ))*/}
        {/*}*/}
        {/*</div>*/}
          <Link to="/">homepage</Link>
          <Link to="/signUp">signUp</Link>
          <Link to="/signIn">signIn</Link>
      </header>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
        </Routes>
    </div>

  );
}

export default App;
