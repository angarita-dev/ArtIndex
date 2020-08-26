import React from 'react';

// Components
import NavBar from './NavBar';
import ResultsList from '../containers/ResultsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ResultsList />
      <div style={{height:'80px', backgroundColor: 'red'}} />
    </div>
  );
}

export default App;
