var React = require('react');

var OnlineArticles = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderOnlineArticlesNavSlick: function () {
		return Model.getArticlesArray().filter(function (article)	{
			if(!article['pdf']) {
				return true;
			}
		}).map(function (article, index) {
			return (
				<div key={index} className="slider-online-articles-nav-element"></div>
			);
		});
	},

	renderOnlineArticlesSlick: function () {
		return Model.getArticlesArray().filter(function (article)	{
			if(!article['pdf']) {
				return true;
			}
		}).map(function (article, index) {
			return (
				<div key={index} className="col-xs-4">
					<a className="slider-online-articles-element" href={article['link']} target="_blank"><img data-lazy={article['image-src']} /></a>
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
		var slider = $('.slider-online-articles')
		slider.slick({
			lazyLoad: 'ondemand',
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

		slider.on('wheel', (function(e) {
		  e.preventDefault();
		  if (e.originalEvent.deltaX < -40) {
	  		// sliding = true
		    $(this).slick('slickNext');
		  } else if (e.originalEvent.deltaX > 40) {
		  	// sliding = true
		    $(this).slick('slickPrev');
		  } else {
		  	window.scrollBy({left: 0, top: e.originalEvent.deltaY, behavior: "auto"})
		  }
		}));

		$('.slider-online-articles-nav').slick({
			lazyLoad: 'ondemand',
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

module.exports = OnlineArticles;