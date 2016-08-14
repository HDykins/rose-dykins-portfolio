var React = require('react');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var Footer = require('./Footer.jsx');
var HomePage = require('./HomePage.jsx');
var AboutPage = require('./AboutPage.jsx');
var ContactPage = require('./ContactPage.jsx');

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

  renderPage: function () {
    if (this.state.currentView==="HOME") {
      return (
        <HomePage currentView={this.state.currentView} changeView={this.changeView} />
      );
    } else if (this.state.currentView==="ABOUT") {
      return (
        <AboutPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    } else if (this.state.currentView==="CONTACT") {
      return (
        <ContactPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    }
  },

  render: function () {
    return (
      <div>
        <Navbar />
        <Splashscreen currentView={this.state.currentView} changeView={this.changeView} />
        {this.renderPage()}
        <Footer />
      </div>
    );
	}
});

module.exports = Application;