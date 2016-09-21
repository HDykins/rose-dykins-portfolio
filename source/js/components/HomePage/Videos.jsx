var React = require('react');
var Model = require('../../../../build/js/model.js');

var Videos = React.createClass({

	renderVideosNavSlick: function () {
		return Model.getVideosArray().map (function (element, index) {
			return <div key={index} className="slider-videos-nav-element"></div>;
		});
	},

	renderVideosSlick: function () {
		return Model.getVideosArray().map (function (element, index) {
			return <a key={index} className="slider-videos-element" href={element['link'] ? element['link'] : 'https://twitter.com/rose_dykins/media'} target="_blank"><img src={element['image-src']} /></a>;
		});
	},

	render: function () {
		return (
			<div>
				<a href="https://vimeo.com/177925265" target="_blank"><h4>VIDEOS</h4></a>
				<div className="slider-videos-nav">
					{this.renderVideosNavSlick()}
				</div>
				<div className="slider-videos">
				  {this.renderVideosSlick()}
				</div>  
			</div>	
		)
	}

});

module.exports = Videos;