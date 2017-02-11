var React = require('react');
var PdfView = require('./PdfView.jsx');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var Footer = require('./Footer.jsx');
var HomePage = require('./HomePage/HomePage.jsx');
var AboutPage = require('./AboutPage/AboutPage.jsx');
var LatestWorkPage = require('./LatestWorkPage/LatestWorkPage.jsx');
var BlogPage = require('./BlogPage/BlogPage.jsx');
var ContactPage = require('./ContactPage/ContactPage.jsx');
var GalleryPage = require('./GalleryPage/GalleryPage.jsx');

var Application = React.createClass({

	getInitialState: function () {
    return {
      currentView: 'GALLERY',
      pdfView: false,
      pdfLink: "",
      currentBlogId: "",
      selectedGalleryPic: ""
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

  changeCurrentBlogId: function (id) {
    this.updateState("currentBlogId", id)
  },

  changeSelectedGalleryPic: function (name) {
    this.updateState("selectedGalleryPic", name)
  },

  renderPage: function () {
    if (this.state.currentView==="HOME") {
      return (
        <HomePage changeView={this.changeView} togglePdfView={this.togglePdfView} changeCurrentBlogId={this.changeCurrentBlogId} />
      );
    } else if (this.state.currentView==="ABOUT") {
      return (
        <AboutPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    } else if (this.state.currentView==="LATEST_WORK") {
      return (
        <LatestWorkPage currentView={this.state.currentView} changeView={this.changeView} togglePdfView={this.togglePdfView} />
      );
    } else if (this.state.currentView==="BLOG") {
      return (
        <BlogPage currentView={this.state.currentView} changeView={this.changeView} currentBlogId={this.state.currentBlogId} />
      );
    } else if (this.state.currentView==="CONTACT") {
      return (
        <ContactPage currentView={this.state.currentView} changeView={this.changeView} />
      );
    } else if (this.state.currentView==="GALLERY") {
      return (
        <GalleryPage currentView={this.state.currentView} changeView={this.changeView} changeSelectedGalleryPic={this.changeSelectedGalleryPic} selectedGalleryPic={this.state.selectedGalleryPic} />
      );
    }
  },

  render: function () {
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