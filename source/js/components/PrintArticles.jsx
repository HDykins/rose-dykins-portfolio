var React = require('react');
var Model = require('../../../build/js/model.js');

var PrintArticles = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	handleLoadPdfViewer: function (pdfLink) {
		this.props.togglePdfView(true, pdfLink)
	},

	renderPrintArticlesNavSlick: function () {
		return Model.getArticlesArray().filter(function (element)	{
			if(!element['pdf']) {
				return true;
			}
		}).map (function (element, index) {
			return (
				<div key={index} className="slider-print-articles-nav-element"></div>
			);
		});
	},

	renderPrintArticlesSlick: function () {
		return Model.getArticlesArray().filter(function (element)	{
			if(!element['pdf']) {
				return true;
			}
		}).map (function (element, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-print-articles-element" onClick={function() {this.handleLoadPdfViewer(element['link'])}.bind(this)}><img src={element['image-src']} /></a>
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
				<h4 className="fullwidth-header">PRINT</h4>
				<div className="slider-print-articles-nav">
					{this.renderPrintArticlesNavSlick()} 					 
				</div>	
				<div className="slider-print-articles">
					{this.renderPrintArticlesSlick()}				
				</div>
			</div>
		)
	},

	initSlicks: function () {
		$('.slider-print-articles').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-print-articles-nav',
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

		$('.slider-print-articles-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  asNavFor: '.slider-print-articles',
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

module.exports = PrintArticles;