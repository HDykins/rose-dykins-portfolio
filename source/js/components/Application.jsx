var React = require('react');
var Homepage = require('./Homepage.jsx');

var Application = React.createClass({

	getInitialState: function () {
    return {
      currentView: 'ABOUT'
    };
  },

  updateState: function (view) {
    this.setState(
    {
      currentView: view
    });
  },

  render: function () {
  	return (
  		<Homepage />
		);
	}
});

module.exports = Application;