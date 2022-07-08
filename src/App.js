import React from 'react';
import Navbar from "./Navbar";
import Background from "./Background"
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./components/styles/Global";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Theme } from "./components/styles/Theme";
import Projects from "./Projects";
import Contact from "./Contact";
import useFetch from './hooks/useFetch';

const { theme, invertTheme } = Theme;
export const propContext = React.createContext();

function App() {
  const { here, setHere } = useFetch() //Setting the theme mode
  const [switched, setSwitched] = useState(here.name === 'light' ? '' : 'switched')
  const [open, setOpen] = useState('') //toggle hamburger
  const [modal, setModal] = useState('') // toggle modal

  return (
  <>
  <ThemeProvider theme={here}>
    <GlobalStyle />
    <propContext.Provider value = { {open, setOpen, modal, setModal, switched, setSwitched} }>
      <Router>
        <Navbar 
          here={here} setHere={setHere} theme={theme} invertTheme={invertTheme} 
        />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/background">
            <Background />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </propContext.Provider>
  </ThemeProvider>
  </>
  );
}

export default App;