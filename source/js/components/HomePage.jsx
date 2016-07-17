var React = require('react');
var Navbar = require('./Navbar.jsx');
var Splashscreen = require('./Splashscreen.jsx');
var RecentArticles = require('./RecentArticles.jsx');

var HomePage = React.createClass({

	render: function () {
		return (
			<section id="main-view">
				<Navbar />
				<Splashscreen />
				<div className="row">
					<div className="col-xs-4">
						<h4>COFFEEGRAM</h4>
						<img src="./build/images/Hiltops-Hideaways1.jpg" />
					</div>
					<div className="col-xs-4">
						<h4>VIDEOS</h4>
						<img src="./build/images/Hiltops-Hideaways1.jpg" />
					</div>
					<div className="col-xs-4">
						<h4>TWITTER</h4>
						<img src="./build/images/Hiltops-Hideaways1.jpg" />
					</div>
				</div>
				<RecentArticles />
			</section>
		);
	}

});

module.exports = HomePage;