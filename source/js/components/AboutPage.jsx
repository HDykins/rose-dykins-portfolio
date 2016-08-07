var React = require('react');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var Footer = require('./Footer.jsx');

var AboutPage = React.createClass({

	componentDidMount: function () {
		// this.initSlicks()
	},

	render: function () {
		return (
			<section id="about-view">
				<Navbar />
				<Splashscreen currentView={this.props.currentView} changeView={this.props.changeView} />
				<div className="row">
					<div className="col-xs-4">
						<h4 className="about">My CV</h4>
						<a href="https://rose_dykins_CV.com" target="_blank" className="glyphicon glyphicon-download">
						</a>
					</div>
					<div className="col-xs-4">
						<blockquote>Rose is good, Rose is great</blockquote>
						<h4>Someone</h4>
						<blockquote>One day she came in with some krispy kremes, I suppose that was pretty decent of her. Otherwise I have no idea who you're asking about.</blockquote>
						<h4>Someone</h4>
						<img src="" alt="Award pic goes here" />
					</div>
					<div className="col-xs-4">
						<p><strong>Lorem ipsum lorem ipsum lorem ipsum,</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
				</div>
				<Footer />
			</section>
		);
	},

});

module.exports = AboutPage;