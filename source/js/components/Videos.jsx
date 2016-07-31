var React = require('react');

var Videos = React.createClass({

	render: function () {
		return (
			<div>
				<h4>VIDEOS</h4>
				<div className="slider-videos-nav">
					<div className="slider-videos-nav-element"></div>
				  <div className="slider-videos-nav-element"></div>
				  <div className="slider-videos-nav-element"></div>
				  <div className="slider-videos-nav-element"></div>
				  <div className="slider-videos-nav-element"></div>
				  <div className="slider-videos-nav-element"></div>
				</div>
				<div className="slider-videos">
				  <div className="slider-videos-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-videos-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-videos-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-videos-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-videos-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				  <div className="slider-videos-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
				</div>  
			</div>	
		)
	}

});

module.exports = Videos;