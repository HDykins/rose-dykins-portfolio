var React = require('react');
// var Model = require('../../../../build/js/model.js');

var RecentArticles = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	handleChangeView: function (view) {
		this.props.changeView(view);
	},

	handleLoadPdfViewer: function (pdfLink) {
		this.props.togglePdfView(true, pdfLink)
	},

	renderRecentArticlesNavSlick: function () {
		return Model.getArticlesArray().map (function (article, index) {
			return (
				<div key={index} className="slider-recent-articles-nav-element"></div>
			);
		});
	},

	renderRecentArticlesSlick: function () {
		return Model.getArticlesArray().map (function (article, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-recent-articles-element" onClick={article['pdf'] ? function() {this.handleLoadPdfViewer(article['link'])}.bind(this) : null} href={!article['pdf'] ? article['link'] : null} target="_blank"><img src={article['image-src']} /></a>
					<h4>{article['title']}</h4>
					<span>{article['date']}</span>
					<p>{article['description']}</p>
				</div>
			);
		}.bind(this));
	},

	render: function () {
		return (
			<div className="row">
				<h4 className="fullwidth-header homepage-header" onClick={function() {this.handleChangeView("LATEST_WORK")}.bind(this)}>RECENT ARTICLES</h4>
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