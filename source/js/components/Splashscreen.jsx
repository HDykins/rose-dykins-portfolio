var React = require('react');
var Model = require('../../../build/js/model.js');

var Splashscreen = React.createClass({

	componentDidMount: function () {
		this.initSlicks()
	},

	handleChangeView: function (view) {
		if (this.props.currentView!==view) {
			this.props.changeView(view);
		}
	},

	renderSplashSlick: function () {
		return Model.getSplashImagesArray().map (function (element, index) {
			return <div key={index} className="splash-image-element"><img src={element['image-src']} /></div>;
		});
	},

	render: function () {
		console.log(this.props.currentView);
		return (
			<div className="container-fluid">
				<div className="row splash-screen">
					<div className="splash-image-outer">
						<div className="splash-image">
							{this.renderSplashSlick()}
						</div>
					</div>
					<br />
					<br />
					<h1>/ROSE DYKINS/</h1>
					<br />
					<h1 className="bigger-text">TRAVEL</h1>
					<br />
					<h1 className="bigger-text">JOURNALIST</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("HOME")}.bind(this)}>HOME</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("ABOUT")}.bind(this)}>ABOUT</h1>
					<br />
					<h1>LATEST WORK</h1>
					<br />
					<h1>BLOG</h1>
					<br />
					<h1>CONTACT</h1>
				</div>
			</div>
		)
	},

	initSlicks: function () {
		$('.splash-image').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  autoplay: true,
		  autoplaySpeed: 10000,
		  speed: 200
		});
	}

});

module.exports = Splashscreen;