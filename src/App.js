import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// import { ThemeContext } from './contexts/ThemeContext'
import { Main} from './pages'

import './App.css';

function App() {

  // const {theme} = useContext(ThemeContext); 
  // console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  return (
    <div className="App">
      <Router>
      <Main/>
      </Router>
    </div>
  );
}

export default App;
