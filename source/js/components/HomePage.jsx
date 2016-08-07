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

	componentDidMount: function () {
		this.initSlicks()
	},

	render: function () {
		return (
			<section id="main-view">
				<Navbar />
				<Splashscreen currentView={this.props.currentView} changeView={this.props.changeView} />
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
	},

	initSlicks: function () {

		$('.slider-latest-posts').slick({
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-latest-posts-nav',
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});

		$('.slider-latest-posts-nav').slick({
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-latest-posts',
		    responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
	}

});

module.exports = HomePage;