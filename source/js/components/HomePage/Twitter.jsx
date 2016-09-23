var React = require('react');

var Twitter = React.createClass({

	render: function () {
		return (
			<div>
				<a href="https://twitter.com/rose_dykins" target="_blank"><h4 className="twitter">TWITTER</h4></a>
				<a href="https://twitter.com/rose_dykins" target="_blank">
					<i className="fa fa-twitter icon-overlay" href="https://twitter.com/rose_dykins" target="_blank" aria-hidden="true"></i>
					<img src="./build/images/twitter-image.jpg" />
				</a>	
			</div>
		)
	}

});

module.exports = Twitter;