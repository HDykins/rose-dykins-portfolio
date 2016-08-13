var React = require('react');
var Model = require('../../../build/js/model.js');

var LatestPosts = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderLatestPostsNavSlick: function () {
		return Model.getBlogpostsArray().map (function (element, index) {
			return (
				<div key={index} className="slider-latest-posts-nav-element"></div>
			);
		});
	},

	renderLatestPostsSlick: function () {
		return Model.getBlogpostsArray().map (function (element, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-latest-posts-element" href={element['link'] ? element['link'] : 'http://www.rose.blogPosts'} target="_blank"><img src={element['image-src']} /></a>
					<h4>{element['title']}</h4>
					<span>{element['date']}</span>
					<p>{element['description']}</p>
				</div>
			);
		});
	},

	render: function () {
		return (
			<div className="col-xs-8">
				<h4 className="fullwidth-header">LATEST POSTS</h4>
				<div className="slider-latest-posts-nav">
					{this.renderLatestPostsNavSlick()} 
				</div>	
				<div className="slider-latest-posts">
					{this.renderLatestPostsSlick()}
				</div>
			</div>	
		)
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

module.exports = LatestPosts;