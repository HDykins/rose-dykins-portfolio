var React = require('react');

var PrintArticles = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	handleLoadPdfViewer: function (pdfLink) {
		this.props.togglePdfView(true, pdfLink)
	},

	renderPrintArticlesNavSlick: function () {
		return Model.getArticlesArray().filter(function (article)	{
			if(article['pdf']) {
				return true;
			}
		}).map (function (article, index) {
			return (
				<div key={index} className="slider-print-articles-nav-element"></div>
			);
		});
	},

	renderPrintArticlesSlick: function () {
		return Model.getArticlesArray().filter(function (article)	{
			if(article['pdf']) {
				return true;
			}
		}).map (function (article, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-print-articles-element" onClick={function() {this.handleLoadPdfViewer(article['link'])}.bind(this)}><img data-lazy={article['image-src']} /></a>
					<h4>{article['title']}</h4>
					<h3>{article['publication']}</h3>
					<p>{article['description']}</p>
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
		var slider = $('.slider-print-articles')
		slider.slick({
			lazyLoad: 'ondemand',
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

		slider.on('wheel', (function(e) {
		  e.preventDefault();
		  if (e.originalEvent.deltaX < -40) {
		    $(this).slick('slickNext');
		  } else if (e.originalEvent.deltaX > 40) {
		    $(this).slick('slickPrev');
		  } else {
		  	window.scrollBy({left: 0, top: e.originalEvent.deltaY, behavior: "auto"})
		  }
		}));

		$('.slider-print-articles-nav').slick({
			lazyLoad: 'ondemand',
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
		      	lazyLoad: 'progressive',
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