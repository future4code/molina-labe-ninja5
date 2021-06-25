import React from "react";
import CreateJob from "./components/NewJobs/CreateJob";
import Navbar from './components/header/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
			  <Navbar />
		    </Router>
        <CreateJob />
      </div>
    );
  }
}
