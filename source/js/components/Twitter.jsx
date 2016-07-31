var React = require('react');

var Twitter = React.createClass({

	render: function () {
		return (
			<div>
				<h4>TWITTER</h4>
				<div className="slider-twitter-nav">
					<div className="slider-twitter-nav-element"></div>
				  <div className="slider-twitter-nav-element"></div>
				  <div className="slider-twitter-nav-element"></div>
				  <div className="slider-twitter-nav-element"></div>
				  <div className="slider-twitter-nav-element"></div>
				  <div className="slider-twitter-nav-element"></div>
				</div>
				<div className="slider-twitter">
				  <div className="slider-twitter-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-twitter-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-twitter-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-twitter-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-twitter-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-twitter-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				</div>  
			</div>	
		)
	}

});

module.exports = Twitter;