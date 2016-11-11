$(window).load(function() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var Application = require('./components/Application.jsx');

	ReactDOM.render(<Application />, document.querySelector('[data-rose-portfolio-react-application]'));
});