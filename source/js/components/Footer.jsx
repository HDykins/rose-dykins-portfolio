var React = require('react');

var Footer = React.createClass({

	render: function () {
		return (
			<div className="row footer">
				<div className="col-xs-4">
					<p>Contact: rosedykins@traveljourney.com / 077 897 345 7699</p>
				</div>
				<div className="col-xs-4">
					<p>Web design: <a href="http://www.feedingcrows.co.uk" target="_blank">www.feedingcrows.co.uk</a></p>
					<p>Created by: <a href="http://www.hdykins.co.uk" target="_blank">www.hdykins.co.uk</a></p>
				</div>
				<div className="col-xs-4">
					<p>© Rose Dykins 2016</p>
				</div>								
			</div>
		)
	}

});

module.exports = Footer;