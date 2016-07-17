var React = require('react');

var Splashscreen = React.createClass({

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row splash-screen">
					<div className="splash-image-outer">
						<div className="splash-image">
							  <div className="splash-image-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
							  <div className="splash-image-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
							  <div className="splash-image-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
							  <div className="splash-image-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
							  <div className="splash-image-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
							  <div className="splash-image-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
						</div>
					</div>
					<br />
					<br />
					<h1>ROSE DYKINS</h1>
					<br />
					<h1 className="bigger-text">TRAVEL</h1>
					<br />
					<h1 className="bigger-text">JOURNALIST</h1>
					<br />
					<h1>HOME</h1>
					<br />
					<h1>ABOUT</h1>
					<br />
					<h1>LATEST WORK</h1>
					<br />
					<h1>BLOG</h1>
					<br />
					<h1>CONTACT</h1>
				</div>
			</div>
		)
	}

});

module.exports = Splashscreen;