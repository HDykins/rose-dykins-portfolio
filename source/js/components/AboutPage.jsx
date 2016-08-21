var React = require('react');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var Footer = require('./Footer.jsx');

var AboutPage = React.createClass({

	render: function () {
		return (
			<section id="about-view">
				<div className="row">
					<div className="col-xs-4 cv">
						<h4 className="about">My CV</h4>
						<span className="fa large-icon fa-file-text-o"></span>
						<p className="cv-text">Download my CV as a pdf</p>
						<a href="https://rose_dykins_CV.com" target="_blank" className="fa large-icon fa-arrow-circle-o-down">
						</a>
					</div>
					<div className="col-xs-4 quotes">
						<h4 className="about">Quotes</h4>
						<blockquote>Rose is good, Rose is great</blockquote>
						<h4>Someone</h4>
						<blockquote>One day she came in with some krispy kremes, I suppose that was pretty decent of her. Otherwise I have no idea who you're asking about.</blockquote>
						<h4>Someone</h4>
						<img src="./build/images/media-award-image.png" alt="Award pic goes here" />
					</div>
					<div className="col-xs-4 about-text">
						<h4 className="about">About</h4>
						<p><strong>Lorem ipsum lorem ipsum lorem ipsum,</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
				</div>
			</section>
		);
	},

});

module.exports = AboutPage;