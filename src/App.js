import React from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom';

// import { ThemeContext } from './contexts/ThemeContext'
import { Main} from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css';

function App() {

  // const {theme} = useContext(ThemeContext); 
  // console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  return (
    <div className="App">
     <Router>
        <ScrollToTop/>
          <Route path="/" exact component={Main} />

          <Redirect to="/" />
      </Router>
      <BackToTop/>
    </div>
  );
}

export default App;
