var React = require('react');
// var Model = require('../../../../build/js/model.js');

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
					<a className="slider-latest-posts-element" onClick={ blogpost['id'] ? function() {this.handleChangeView("BLOG", blogpost['id'])}.bind(this) : function() {this.handleChangeView("BLOG")}.bind(this) }><img alt="./" data-lazy={blogpost['slider-image']} /></a>
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
				<h4 className="fullwidth-header homepage-header" onClick={function() {this.handleChangeView("BLOG")}.bind(this)}>LATEST POSTS (UNDER CONSTRUCTION)</h4>
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
		var sliding = false
		var slider = $('.slider-latest-posts')
		slider.slick({
			lazyLoad: 'ondemand',
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
		slider.on('wheel', (function(e) {
		  e.preventDefault();
		  if (e.originalEvent.deltaX < -50) {
		  	if (!sliding) {
		    	$(this).slick('slickNext');
		  	}
		  } else if (e.originalEvent.deltaX > 50) {
		    if (!sliding) {
		    	$(this).slick('slickNext');
		  	}
		  } else {
		  	window.scrollBy({left: 0, top: e.originalEvent.deltaY, behavior: "auto"})
		  }
		}));

		$('.slider-latest-posts-nav').slick({
			lazyLoad: 'ondemand',
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