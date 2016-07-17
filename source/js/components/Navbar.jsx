var React = require('react');

var Navbar = React.createClass({

	render: function () {
		return (
			<nav className="navbar navbar-inverse">
				<i className="fa fa-2x fa-google-plus" aria-hidden="true"></i>
				<i className="fa fa-2x fa-twitter" aria-hidden="true"></i>
				<i className="fa fa-2x fa-tumblr" aria-hidden="true"></i>
				<i className="fa fa-2x fa-facebook" aria-hidden="true"></i>
			</nav>
		)
	}

});

module.exports = Navbar;