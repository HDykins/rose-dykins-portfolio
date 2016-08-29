var React = require('react');
var Model = require('../../../../build/js/model.js');

var Videos = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderVideosNavSlick: function () {
		return Model.getVideosArray().map (function (element, index) {
			return <div key={index} className="slider-videos-nav-element"></div>;
		});
	},

	renderVideosSlick: function () {
		return Model.getVideosArray().map (function (element, index) {
			return <a key={index} className="slider-videos-element" href={element['link'] ? element['link'] : 'https://vimeo.com/177925265'} target="_blank"><img src={element['image-src']} /></a>;
		});
	},

	render: function () {
		return (
			<div>
				<a href="https://vimeo.com/177925265" target="_blank"><h4>VIDEOS</h4></a>
				<div className="slider-videos-nav">
					{this.renderVideosNavSlick()}
				</div>
				<div className="slider-videos">
				  {this.renderVideosSlick()}
				</div>  
			</div>	
		)
	},

	initSlicks: function () {
		$('.slider-videos').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: false,
		  speed: 200,
		  asNavFor: '.slider-videos-nav'
		});

		$('.slider-videos-nav').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  speed: 200,
		  asNavFor: '.slider-videos'
		});
	}

});

module.exports = Videos;