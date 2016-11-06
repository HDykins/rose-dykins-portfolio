var React = require('react');

var ContactPage = React.createClass({

	render: function () {
		return (
			<section id="contacts-view" className="contacts-view">
				<div className="row">
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<a href="mailto:rose.dykins@hotmail.co.uk"><i className="fa large-icon fa-envelope-o"></i></a>
						</div>
						<div className="col-xs-8"><p className="contact-info">ROSE.DYKINS@HOTMAIL.CO.UK</p></div>
					</div>
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<i className="fa large-icon fa-phone"></i>
						</div>
						<div className="col-xs-8"><p className="contact-info">0790 674 8008</p></div>
					</div>
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<a href="https://twitter.com/rose_dykins" target="_blank"><i className="fa large-icon fa-twitter"></i></a>
						</div>
						<div className="col-xs-8"><p className="contact-info">@ROSE_DYKINS</p></div>
					</div>
				</div>
			</section>
		);
	}

});

module.exports = ContactPage;