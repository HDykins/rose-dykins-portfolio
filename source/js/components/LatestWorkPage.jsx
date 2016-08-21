var React = require('react');
var OnlineArticles = require('./OnlineArticles.jsx');
var PrintArticles = require('./PrintArticles.jsx');

var LatestWorkPage = React.createClass({

	render: function () {
		return (
			<section id="latest-work-view">
				<OnlineArticles />
				<PrintArticles togglePdfView={this.props.togglePdfView} />
			</section>
		);
	}

});

module.exports = LatestWorkPage;