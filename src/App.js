import React, { useState } from 'react'
import './App.css';
import Button from './components/Button/button';
import Calculator from './components/Calculator/Calculator';

function App() {

  const [ enabled, setEnabled ] = useState(false)

  return (
    <div className="App">
      <Button 
        enabled={ enabled }
        setEnabled={ setEnabled }
      />
      {enabled ? <Calculator /> : null}
    </div>
  );
}

export default App;
