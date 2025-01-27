import React from "react";
import {Routes, Route} from 'react-router-dom';

import {Homepage} from './pages/Homepage'



function App() {
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
