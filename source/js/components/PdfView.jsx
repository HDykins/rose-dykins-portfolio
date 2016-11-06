var React = require('react');
var PdfViewer = require('pdfviewer')

var PdfView = React.createClass({

	componentDidMount: function () {
		new PdfViewer({pdfUrl: 'no more', staticHost: this.props.pdfLink}).embed(this.refs.pdf)
		$('[id="pdf-view"]').append($('<div class="close-button">X</div>'));
		$('.close-button').click(function() {
  		this.handleCloseButton(this.props.pdfLink);
		}.bind(this));
	},

	componentWillUnmount: function () {
		$('.close-button').off('click');
	},

	handleCloseButton: function (pdfLink) {
		this.props.togglePdfView(false, pdfLink)
	},

	renderPdfView: function () {
		return (
		<div className="close-button">X</div>
		);
	},

	render: function () {
		return (
			<section ref="pdf" id="pdf-view" className="container pdf-view">
				{this.renderPdfView()}
			</section>
		);
	}

});

module.exports = PdfView;