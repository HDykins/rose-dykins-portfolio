var React = require('react');
var Model = require('../../../../build/js/model.js');

var LatestPosts = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	handleChangeView: function (view, elementIdToScrollTo) {
		this.props.changeView(view);
		if (elementIdToScrollTo) {
			this.props.changeCurrentBlogId(elementIdToScrollTo);
		}
	},

	renderLatestPostsNavSlick: function () {
		return Model.getBlogpostsArray().map (function (element, index) {
			return (
				<div key={index} className="slider-latest-posts-nav-element"></div>
			);
		});
	},

	renderLatestPostsSlick: function () {
		return Model.getBlogpostsArray().map (function (blogpost, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-latest-posts-element" onClick={ blogpost['id'] ? function() {this.handleChangeView("BLOG", blogpost['id'])}.bind(this) : function() {this.handleChangeView("BLOG")}.bind(this) }><img src={blogpost['slider-image']} /></a>
					<h4>{blogpost['title']}</h4>
					<span>{blogpost['date']}</span>
					<p>{blogpost['description']}</p>
				</div>
			);
		}.bind(this));
	},

	render: function () {
		return (
			<div className="col-xs-8">
				<h4 className="fullwidth-header homepage-header" onClick={function() {this.handleChangeView("BLOG")}.bind(this)}>LATEST POSTS</h4>
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