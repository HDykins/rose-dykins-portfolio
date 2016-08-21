var React = require('react');
var RecentArticles = require('./RecentArticles.jsx');
var Coffeegram = require('./Coffeegram.jsx');
var Videos = require('./Videos.jsx');
var Twitter = require('./Twitter.jsx');
var LatestPosts = require('./LatestPosts.jsx');
var About = require('./About.jsx');

var HomePage = React.createClass({

	render: function () {
		return (
			<section id="main-view">
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
				<RecentArticles togglePdfView={this.props.togglePdfView} />
				<div className="row">
					<LatestPosts />
					<About />
				</div>
			</section>
		);
	}

});

module.exports = HomePage;