var React = require('react');
var RecentArticles = require('./RecentArticles.jsx');
var Coffeegram = require('./Coffeegram.jsx');
var TravelPics = require('./TravelPics.jsx');
var Twitter = require('./Twitter.jsx');
var LatestPosts = require('./LatestPosts.jsx');
var About = require('./About.jsx');

var HomePage = React.createClass({

	handleScroll: function () {
		$('html, body').animate({scrollTop: $('#top').offset().top}, 1500);
	},

	render: function () {
		return (
			<section id="main-view">
				<div className="row">
					<div className="col-xs-4">
						<Coffeegram />
					</div>
					<div className="col-xs-4">
						<TravelPics changeView={this.props.changeView} />
					</div>
					<div className="col-xs-4">
						<Twitter />
					</div>
				</div>
				<RecentArticles changeView={this.props.changeView} togglePdfView={this.props.togglePdfView} />
				<div className="row">
					{/*<LatestPosts changeView={this.props.changeView} changeCurrentBlogId={this.props.changeCurrentBlogId} />*/}
					<About changeView={this.props.changeView} />
					<a className="scroll-top" onClick={this.handleScroll}><h4>^ Back to top ^</h4></a>
				</div>
			</section>
		);
	}

});

module.exports = HomePage;