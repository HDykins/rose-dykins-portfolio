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
					<p>I'm simply amazing. I'm unmatched in my field and will one day save the world from itself. Read more about me <a className="link" onClick={function() {this.handleChangeView("ABOUT")}.bind(this)}>here</a> on a page all about me. Me.</p>
				</div>
			</div>
		)
	}

});

module.exports = About;