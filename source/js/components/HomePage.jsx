var React = require('react');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var RecentArticles = require('./RecentArticles.jsx');
var Coffeegram = require('./Coffeegram.jsx');
var Videos = require('./Videos.jsx');
var Twitter = require('./Twitter.jsx');
var LatestPosts = require('./LatestPosts.jsx');
var About = require('./About.jsx');
var Footer = require('./Footer.jsx');

var HomePage = React.createClass({

	render: function () {
		return (
			<section id="main-view">
				<Navbar />
				<Splashscreen />
				<div className="row">
					<div className="col-xs-4">
						<Coffeegram />
					</div>
					<div className="col-xs-4">
						<Videos />
					</div>
					<div className="col-xs-4">
						<Twitter />
					</div>
				</div>
				<RecentArticles />
				<div className="row">
					<LatestPosts />
					<About />
				</div>
				<Footer />
			</section>
		);
	}

});

module.exports = HomePage;