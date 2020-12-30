import React, { Component } from 'react';
import './App.css';
import AboutPage from "./Components/AboutPage/AboutPage";
import WorkExperience from "./Components/WorkExperiencePage/WorkExperience";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import MusicPage from "./Components/MusicPage/MusicPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/workExperience">
            <WorkExperience></WorkExperience>
          </Route>
          <Route path="/portfolio">
            <PortfolioPage></PortfolioPage>
          </Route>
          <Route path="/Music/Audio">
            <MusicPage></MusicPage>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
