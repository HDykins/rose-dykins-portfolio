var React = require('react');

var AboutPage = React.createClass({

	render: function () {
		return (
			<section id="about-view">
				<div className="row">
					<div className="col-xs-4 cv">
						<h4 className="about">My CV</h4>
						<span className="fa large-icon fa-file-text-o"></span>
						<p className="cv-text">Download my CV as a pdf</p>
						<a href="https://rose_dykins_CV.com" target="_blank" className="fa large-icon fa-arrow-circle-o-down">
						</a>
					</div>
					<div className="col-xs-4 quotes">
						<h4 className="about">Quotes</h4>
						<blockquote>Quote pending</blockquote>
						<h4>Quotee pending</h4>
						<blockquote>Quote pending</blockquote>
						<h4>Quotee pending</h4>
						<img src="./build/images/media-award-image.png" alt="Award pic goes here" />
					</div>
					<div className="col-xs-4 about-text">
						<h4 className="about">About</h4>
						<p><strong>Lorem ipsum lorem ipsum lorem ipsum,</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
				</div>
			</section>
		);
	},

});

module.exports = AboutPage;