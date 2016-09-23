var React = require('react');

var ContactPage = React.createClass({

	render: function () {
		return (
			<section id="contacts-view" className="contacts-view">
				<div className="row">
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<a href="mailto:rosedykins@gmail.com"><i className="fa large-icon fa-envelope-o"></i></a>
						</div>
						<div className="col-xs-8"><p className="contact-info">ROSEDYKINS@GMAIL.COM</p></div>
					</div>
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<i className="fa large-icon fa-phone"></i>
						</div>
						<div className="col-xs-8"><p className="contact-info">0778 446 725 3390</p></div>
					</div>
					<div className="col-xs-4">
						<div className="col-xs-4 contact-icon-column">
						<a href="https://twitter.com/rose_dykins" target="_blank"><i className="fa large-icon fa-twitter"></i></a>
						</div>
						<div className="col-xs-8"><p className="contact-info">@ROSEDYKINSJOURNALIST</p></div>
					</div>
				</div>
			</section>
		);
	}

});

module.exports = ContactPage;