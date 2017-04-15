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
			return <a onClick={function() {this.handleChangeView("GALLERY")}.bind(this)} key={index} className="slider-preview-travel-pics-element"><img src={element['image-src']} /></a>;
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
		$('.slider-preview-travel-pics').slick({
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

		$('.slider-preview-travel-pics-nav').slick({
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