var React = require('react');
var RecentArticles = require('./RecentArticles.jsx');
var Coffeegram = require('./Coffeegram.jsx');
var Videos = require('./Videos.jsx');
var Twitter = require('./Twitter.jsx');
var LatestPosts = require('./LatestPosts.jsx');
var About = require('./About.jsx');

var ContactPage = React.createClass({

	render: function () {
		return (
			<section id="contacts-view" className="contacts-view">
				<div className="row">
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<span className="fa large-icon fa-envelope-o"></span>
						</div>
						<div className="col-xs-8"><p className="contact-info">ROSEDYKINS@GMAIL.COM</p></div>
					</div>
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<span className="fa large-icon fa-phone"></span>
						</div>
						<div className="col-xs-8"><p className="contact-info">0778 446 725 3390</p></div>
					</div>
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<span className="fa large-icon fa-twitter"></span>
						</div>
						<div className="col-xs-8"><p className="contact-info">@ROSEDYKINSJOURNALIST</p></div>
					</div>
				</div>
			</section>
		);
	}

});

module.exports = ContactPage;