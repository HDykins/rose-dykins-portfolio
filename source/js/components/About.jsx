var React = require('react');

var About = React.createClass({

	render: function () {
		return (
			<div className="col-xs-4">
				<h4 className="about">ABOUT</h4>
				<div className="about-section">
					<img className="rose-portrait" src="./build/images/Hiltops-Hideaways1.jpg" />
					<p>I'm simply amazing. I'm unmatched in my field and will one day save the world from itself. Read more about me here on a page all about me. Me.</p>
				</div>
			</div>
		)
	}

});

module.exports = About;