var React = require('react');

var About = React.createClass({

	handleChangeView: function (view) {
		this.props.changeView(view);
	},

	render: function () {
		return (
			<div className="col-xs-4">
				<h4 className="about homepage-header" onClick={function() {this.handleChangeView("ABOUT")}.bind(this)}>ABOUT</h4>
				<div className="about-section">
					<img onClick={function() {this.handleChangeView("ABOUT")}.bind(this)} className="rose-portrait" src="./build/images/about-mugshot.png" />
					<p>About section under-construction. Read more about me <a className="link" onClick={function() {this.handleChangeView("ABOUT")}.bind(this)}>here</a> on the About page</p>
				</div>
			</div>
		)
	}

});

module.exports = About;