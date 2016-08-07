var React = require('react');
var HomePage = require('./HomePage.jsx');
var AboutPage = require('./AboutPage.jsx');

var Application = React.createClass({

	getInitialState: function () {
    return {
      currentView: 'HOME'
    };
  },

  updateState: function (view) {
    this.setState(
    {
      currentView: view
    });
  },

  changeView: function (view) {
    this.updateState(view);
  },

  render: function () {
    if (this.state.currentView==="HOME") {
    	return (
    		<HomePage currentView={this.state.currentView} changeView={this.changeView} />
  		);
    } else {
      return (
        <AboutPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    }
	}
});

module.exports = Application;