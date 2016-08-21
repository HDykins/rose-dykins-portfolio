var React = require('react');
var PdfView = require('./PdfView.jsx');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var Footer = require('./Footer.jsx');
var HomePage = require('./HomePage.jsx');
var AboutPage = require('./AboutPage.jsx');
var LatestWorkPage = require('./LatestWorkPage.jsx');
var ContactPage = require('./ContactPage.jsx');


var Application = React.createClass({

	getInitialState: function () {
    return {
      currentView: 'HOME',
      pdfView: false,
      pdfLink: ""
    };
  },

  updateState: function (state, value) {
    this.setState(
    {
      [state]: value
    });
  },

  changeView: function (view) {
    this.updateState("currentView", view);
  },

  togglePdfView: function (pdfView, pdfLink) {
    this.updateState("pdfView", !this.state.pdfView)
    this.updateState("pdfLink", pdfLink)
  },

  renderPage: function () {
    if (this.state.currentView==="HOME") {
      return (
        <HomePage currentView={this.state.currentView} changeView={this.changeView} togglePdfView={this.togglePdfView} />
      );
    } else if (this.state.currentView==="ABOUT") {
      return (
        <AboutPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    } else if (this.state.currentView==="LATEST_WORK") {
      return (
        <LatestWorkPage currentView={this.state.currentView} changeView={this.changeView} togglePdfView={this.togglePdfView} />
      );
    } else if (this.state.currentView==="CONTACT") {
      return (
        <ContactPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    }
  },

  render: function () {
    console.log(this.state.pdfView);
    if (this.state.pdfView) {
      return <PdfView pdfLink={this.state.pdfLink} togglePdfView={this.togglePdfView} />
    } else {
      return (
        <div>
          <Navbar />
          <Splashscreen currentView={this.state.currentView} changeView={this.changeView} />
          {this.renderPage()}
          <Footer />
        </div>
      );
    }
	}
});

module.exports = Application;