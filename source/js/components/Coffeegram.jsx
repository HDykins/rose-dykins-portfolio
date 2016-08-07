var React = require('react');
var Model = require('../../../build/js/model.js');

var Coffeegram = React.createClass({

	componentDidMount: function () {
		this.initSlicks();
	},

	renderCoffeegramNavSlick: function () {
		return Model.getCoffeegramArray().map (function (element, index) {
			return <div key={index} className="slider-coffeegram-nav-element"></div>;
		});
	},

	renderCoffeegramSlick: function () {
		return Model.getCoffeegramArray().map (function (element, index) {
			return <a key={index} className="slider-coffeegram-element" href={element['link'] ? element['link'] : 'http://www.rose.coffeegram'} target="_blank"><img src={element['image-src']} /></a>;
		});
	},

	render: function () {
		return (
			<div>
				<h4>COFFEEGRAM</h4>
				<div className="slider-coffeegram-nav">
					{this.renderCoffeegramNavSlick()}
				</div>
				<div className="slider-coffeegram">
				  {this.renderCoffeegramSlick()}
				</div>  
			</div>	
		)
	},

	initSlicks: function () {
		$('.slider-coffeegram').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: false,
		  speed: 200,
		  asNavFor: '.slider-coffeegram-nav'
		});

		$('.slider-coffeegram-nav').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  speed: 200,
		  asNavFor: '.slider-coffeegram'
		});
	}

});

module.exports = Coffeegram;