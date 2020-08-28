import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import NavBar from './NavBar';
import ResultsList from './ResultsList';
import ArtDisplay from '../components/ArtDisplay';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={ResultsList} />          
          <Route path='/display' component={ArtDisplay} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
