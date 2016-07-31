var React = require('react');

var Coffeegram = React.createClass({

	render: function () {
		return (
			<div>
				<h4>COFFEEGRAM</h4>
				<div className="slider-coffeegram-nav">
					<div className="slider-coffeegram-nav-element"></div>
				  <div className="slider-coffeegram-nav-element"></div>
				  <div className="slider-coffeegram-nav-element"></div>
				  <div className="slider-coffeegram-nav-element"></div>
				  <div className="slider-coffeegram-nav-element"></div>
				  <div className="slider-coffeegram-nav-element"></div>
				</div>
				<div className="slider-coffeegram">
				  <div className="slider-coffeegram-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-coffeegram-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-coffeegram-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-coffeegram-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-coffeegram-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-coffeegram-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				</div>  
			</div>	
		)
	}

});

module.exports = Coffeegram;