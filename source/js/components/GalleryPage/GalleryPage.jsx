var React = require('react');

var GalleryPage = React.createClass({

	renderGalleryPics: function () {
		console.log(this.props)
		return Model.getGalleryPicsArray().map(function (galleryPic, index) {
			return (
				<div key={index} onClick={(this.props.selectedGalleryPic===galleryPic.name) ? function() {this.props.changeSelectedGalleryPic("")}.bind(this) : function() {this.props.changeSelectedGalleryPic(galleryPic.name)}.bind(this)} className={(galleryPic.name === this.props.selectedGalleryPic) ? "col-xs-4 selected-gallery-pic" : "col-xs-4"}>
					<img src={galleryPic['image-src']} alt="No pics" />
				</div>
			)
		}.bind(this))
	},

	render: function () {
		console.log(this.props);
		return (
			<section id="gallery-view">
				<div className="row gallery-pics">
					{this.renderGalleryPics()}
				</div>
			</section>
		);
	},

});

module.exports = GalleryPage;