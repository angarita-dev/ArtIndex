import React from 'react';

// Components
import NavBar from './NavBar';
import ResultsList from './ResultsList';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ResultsList />
      <Footer />
    </div>
  );
}

export default App;
