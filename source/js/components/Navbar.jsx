var React = require('react');

var Navbar = React.createClass({

	render: function () {
		return (
			<nav id="top" className="navbar navbar-inverse">
				<i className="fa fa-2x fa-google-plus link-void" aria-hidden="true"></i>
				<a href="https://twitter.com/rose_dykins?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a>
				<i className="fa fa-2x fa-tumblr link-void" aria-hidden="true"></i>
				<a href="https://www.facebook.com/rose.dykins" target="_blank"><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></a>
			</nav>
		)
	}

});

module.exports = Navbar;