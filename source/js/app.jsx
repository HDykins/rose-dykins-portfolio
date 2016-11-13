var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.jsx');
// var Preload = require('react-preload').Preload;

// var images = ['./build/images/gillifish.jpg', './build/images/bintan-bliss.png', './build/images/sollo.png']
// var loadingIndicator = (<div>Loading...</div>)
 

ReactDOM.render(<Application />, document.querySelector('[data-rose-portfolio-react-application]'));