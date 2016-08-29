var React = require('react');
var Model = require('../../../../build/js/model.js');

var BlogPage = React.createClass({

	componentDidMount: function () {
		if (this.props.currentBlogId) {
			$('html, body').animate({scrollTop: $("#blogpost" + this.props.currentBlogId).offset().top}, 1500);
		}
	},

	handleScroll: function () {
		$('html, body').animate({scrollTop: $('#top').offset().top}, 1500);
	},

	renderBlogpostImages: function (blogpost) {
		return blogpost['image-srcs'].map(function (image, index) {
			return (
				<div key={index} className="blog-image">
					<img src={image} />
				</div>
			);	
		});
	},

	renderBlogpostParagraphs: function (blogpost) {
		return blogpost['post'].replace(/\s\s+/g, ' ').split('NEWLINE').map(function (paragraph, index) {
			return <p key={index}>{paragraph}</p>
		});
	},

	renderBlogpost: function () {
		return Model.getBlogpostsArray().map(function (blogpost, index) {
			return (
				<div id={'blogpost' + blogpost['id']} key={index} className="row">
					<div className="col-xs-12">
						<h4 className="fullwidth-header blogpost">{blogpost['date']}</h4>
						<div className="col-xs-8">
							{this.renderBlogpostImages(blogpost)}
						</div>
						<div className="col-xs-4">
							<h4>{blogpost['title']}</h4>
							{this.renderBlogpostParagraphs(blogpost)}
							<a className="scroll-top" onClick={this.handleScroll}><h4>^ Back to top ^</h4></a>
						</div>
					</div>
				</div>
			);
		}.bind(this));
	},

	render: function () {
		return (
			<section id="blog-view" className="blog-view">
				{this.renderBlogpost()}
			</section>
		);
	}

});

module.exports = BlogPage;