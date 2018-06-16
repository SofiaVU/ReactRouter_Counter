import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About'

ReactDOM.render((
	<Router>	
	    <div>
	       <Route exact  path="/" component={App} />
	       <Route path="/about" component={About} />
	    </div>
  </Router>

), document.getElementById('root'));
registerServiceWorker();
