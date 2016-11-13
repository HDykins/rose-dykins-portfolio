var React = require('react');
// var Model = require('../../../../build/js/model.js');

var Instagram = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderInstagramNavSlick: function () {
		return Model.getInstagramArray().map (function (element, index) {
			return <div key={index} className="slider-instagram-nav-element"></div>;
		});
	},

	renderInstagramSlick: function () {
		return Model.getInstagramArray().map (function (element, index) {
			return <a key={index} className="slider-instagram-element" href={element['link'] ? element['link'] : 'https://www.instagram.com/rosedykins/'} target="_blank"><img src={element['image-src']} /></a>;
		});
	},

	render: function () {
		return (
			<div>
				<a href="https://www.instagram.com/rosedykins/" target="_blank"><h4>INSTAGRAM</h4></a>
				<div className="slider-instagram-nav">
					{this.renderInstagramNavSlick()}
				</div>
				<a className="icon-overlay" href="https://www.instagram.com/rosedykins/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
				<div className="slider-instagram">
				  {this.renderInstagramSlick()}
				</div>  
			</div>	
		)
	},

	initSlicks: function () {
		$('.slider-instagram').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: false,
		  speed: 200,
		  asNavFor: '.slider-instagram-nav',
		  autoplay: true,
		  autoplaySpeed: 10000,
		  speed: 200
		});

		$('.slider-instagram-nav').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  speed: 200,
		  asNavFor: '.slider-instagram',
		  autoplay: true,
		  autoplaySpeed: 10000,
		  speed: 200		  
		});
	}

});

module.exports = Instagram;