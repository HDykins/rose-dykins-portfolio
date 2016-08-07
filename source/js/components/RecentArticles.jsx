var React = require('react');
var Model = require('../../../build/js/model.js');

var RecentArticles = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderRecentArticlesNavSlick: function () {
		return Model.getArticlesArray().map (function (element, index) {
			return (
				<div key={index} className="slider-recent-articles-nav-element"></div>
			);
		});
	},

	renderRecentArticlesSlick: function () {
		return Model.getArticlesArray().map (function (element, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-recent-articles-element" href={element['link'] ? element['link'] : 'http://www.rose.RecentArticles'} target="_blank"><img src={element['image-src']} /></a>
					<h4>{element['title']}</h4>
					<span>{element['date']}</span>
					<p>{element['description']}</p>
				</div>
			);
		});
	},

	render: function () {
		return (
			<div className="row">
				<h4 className="fullwidth-header">RECENT ARTICLES</h4>
				<div className="slider-recent-articles-nav">
					{this.renderRecentArticlesNavSlick()} 					 
				</div>	
				<div className="slider-recent-articles">
					{this.renderRecentArticlesSlick()}				
				</div>
			</div>
		)
	},

	initSlicks: function () {
		$('.slider-recent-articles').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-recent-articles-nav',
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

		$('.slider-recent-articles-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-recent-articles',
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

module.exports = RecentArticles;