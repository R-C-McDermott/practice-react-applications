import { useState } from 'react';
import './App.css';
import Form from './Form';



function App() {

  const [ name, setName ] = useState("");

  const handleSubmit = (newName) => {
    setName(newName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}!</h1>
        <Form onNameChange={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
