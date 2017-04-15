var React = require('react');

var GalleryPage = React.createClass({

	handleChangeSelectedGalleryPic: function (galleryPic) {
		if (this.props.selectedGalleryPic===galleryPic.name) {
			this.props.changeSelectedGalleryPic("")
		} else {
			this.props.changeSelectedGalleryPic(galleryPic.name)
		}
	},

	renderGalleryPics: function () {
		return Model.getGalleryPicsArray().map(function (galleryPic, index) {
			return (
				<div key={index} onClick={function() {this.handleChangeSelectedGalleryPic(galleryPic)}.bind(this)} className={(galleryPic.name === this.props.selectedGalleryPic) ? "col-xs-4 selected-gallery-pic" : "col-xs-4 gallery-pic"}>
					<img src={galleryPic['image-src']} alt="No pics" />
				</div>
			)
		}.bind(this))
	},

	render: function () {
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