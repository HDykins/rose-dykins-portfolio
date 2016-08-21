var React = require('react');
var Model = require('../../../build/js/model.js');

var OnlineArticles = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderOnlineArticlesNavSlick: function () {
		return Model.getArticlesArray().filter(function (element)	{
			if(element['pdf']) {
				return true;
			}
		}).map (function (element, index) {
			return (
				<div key={index} className="slider-online-articles-nav-element"></div>
			);
		});
	},

	renderOnlineArticlesSlick: function () {
		return Model.getArticlesArray().filter(function (element)	{
			if(element['pdf']) {
				return true;
			}
		}).map (function (element, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-online-articles-element" href={element['link']} target="_blank"><img src={element['image-src']} /></a>
					<h4>{element['title']}</h4>
					<span>{element['date']}</span>
					<p>{element['description']}</p>
				</div>
			);
		}.bind(this));
	},

	render: function () {
		return (
			<div className="row">
				<h4 className="fullwidth-header">ONLINE</h4>
				<div className="slider-online-articles-nav">
					{this.renderOnlineArticlesNavSlick()} 					 
				</div>	
				<div className="slider-online-articles">
					{this.renderOnlineArticlesSlick()}				
				</div>
			</div>
		)
	},

	initSlicks: function () {
		$('.slider-online-articles').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-online-articles-nav',
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

		$('.slider-online-articles-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-online-articles',
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

module.exports = OnlineArticles;