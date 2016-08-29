var React = require('react');

var Twitter = React.createClass({

	render: function () {
		return (
			<div>
				<a href="https://twitter.com/rose_dykins" target="_blank"><h4 className="twitter">TWITTER</h4></a>
				<a href="https://twitter.com/rose_dykins" target="_blank">
					<img src="./build/images/twitter-image.jpg" />
				</a>	
			</div>
		)
	}

});

module.exports = Twitter;