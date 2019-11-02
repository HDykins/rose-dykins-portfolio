var React = require('react');
// var Model = require('../../../../build/js/model.js');

var TravelPics = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	handleChangeView: function (view) {
		this.props.changeView(view);
	},

	renderTravelPicsNavSlick: function () {
		return Model.getPreviewTravelPicsArray().map (function (element, index) {
			return <div key={index} className="slider-preview-travel-pics-nav-element"></div>;
		});
	},

	renderTravelPicsSlick: function () {
		return Model.getPreviewTravelPicsArray().map (function (element, index) {
			return <a onClick={function() {this.handleChangeView("GALLERY")}.bind(this)} key={index} className="slider-preview-travel-pics-element"><img data-lazy={element['image-src']} /></a>;
		}.bind(this));
	},

	render: function () {
		return (
			<div>
				<a onClick={function() {this.handleChangeView("GALLERY")}.bind(this)}><h4>WHERE I'VE BEEN</h4></a>
				<div className="slider-preview-travel-pics-nav">
					{this.renderTravelPicsNavSlick()}
				</div>
				<a onClick={function() {this.handleChangeView("GALLERY")}.bind(this)}><i className="fa fa-picture-o icon-overlay" aria-hidden="true"></i></a>
				<div className="slider-preview-travel-pics">
				  {this.renderTravelPicsSlick()}
				</div>
			</div>
		)
	},

	initSlicks: function () {
		var sliding = false;
		var timeout;
		var slider = $('.slider-preview-travel-pics')
		slider.slick({
			lazyLoad: 'ondemand',
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: false,
		  speed: 200,
		  asNavFor: '.slider-preview-travel-pics-nav',
		  autoplay: true,
		  autoplaySpeed: 10000,
		  speed: 200
		});
		slider.on('wheel', (function(e) {
		  e.preventDefault();
		  if (e.originalEvent.deltaX < -40) {
		  	clearTimeout(timeout)
		  	timeout = setTimeout(function() {
	    		sliding = false
	    	}, 200)
		  	if (!sliding) {
		    	$(this).slick('slickNext');
		  	}
		  	sliding = true
		  } else if (e.originalEvent.deltaX > 40) {
		  		clearTimeout(timeout)
		    	timeout = setTimeout(function() {
		    		sliding = false
		    	}, 200)
		    if (!sliding) {
		    	$(this).slick('slickPrev');
		  	}
		  	sliding = true
		  } else {
		  	window.scrollBy({left: 0, top: e.originalEvent.deltaY, behavior: "auto"})
		  }
		}));

		$('.slider-preview-travel-pics-nav').slick({
			lazyLoad: 'ondemand',
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  speed: 200,
		  asNavFor: '.slider-preview-travel-pics',
		  autoplay: true,
		  autoplaySpeed: 10000,
		  speed: 200
		});
	}

});

module.exports = TravelPics;