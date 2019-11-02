var React = require('react');

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
					<a className="slider-recent-articles-element" onClick={article['pdf'] ? function() {this.handleLoadPdfViewer(article['link'])}.bind(this) : null} href={!article['pdf'] ? article['link'] : null} target="_blank"><img alt="./build/images/loading-image.jpg" data-lazy={article['image-src']} /></a>
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
		var slider = $('.slider-recent-articles')
		slider.slick({
			lazyLoad: 'ondemand',
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  touchMove: true,
		  swipe: true,
		  asNavFor: '.slider-recent-articles-nav',
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	lazyLoad: 'progressive',
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        adaptiveHeight: true
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

		$('.slider-recent-articles-nav').slick({
			lazyLoad: 'ondemand',
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  touchMove: true,
		  swipe: true,
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