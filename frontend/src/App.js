import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(response => setData(response))
    }, []);

    console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {
            !data ? "Loading" : data.map(user => (
                <div key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.email}</p>
                </div>
            ))
        }
        </div>
      </header>
    </div>
  );
}

export default App;
