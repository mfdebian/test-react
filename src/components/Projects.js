import React from 'react';
import '../App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OtherComponent from './OtherComponent'

function Projects({ match }) {
  return (
    <Router>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to={`${match.url}/a-project`}>A project</Link>
        </li>
        <li>
          <Link to={`${match.url}/another-project`}>Another project</Link>
        </li>
        <li>
          <Link to={`${match.url}/other-component`}> <OtherComponent /> </Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={ Project } />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a project.</h3>}
      />
    </Router>
  );
}

function Project({ match }) {
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
}

export default Projects;
