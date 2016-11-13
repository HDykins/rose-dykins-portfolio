var React = require('react');
// var Model = require('../../../build/js/model.js');

var Splashscreen = React.createClass({

	componentDidMount: function () {
		this.initSlicks()
	},

	handleNameAnimation: function () {
		var name = $('#name');
    name.animate({
      'margin-left': '-=5px',
      'margin-right': '+=5px',
      'color': 'rgb(230,200,20)'
    }, 200, function() {
      name.animate({
        'margin-left': '+=5px',
        'margin-right': '-=5px'
      }, 200, function() {
	      name.animate({
	        'margin-left': '-=5px',
	        'margin-right': '+=5px'
	      }, 200, function() {
			    name.animate({
		        'margin-left': '+=5px',
		        'margin-right': '-=5px'
		      }, 200, function() {
			      name.animate({
			        'margin-left': '-=5px',
			        'margin-right': '+=5px'
			      }, 200, function() {
			        name.animate({
				        'margin-left': '+=5px',
				        'margin-right': '-=5px',
				        'color': 'black'
		      		});
			      });
		      });
	      });
      });
    });		
	},

	handleChangeView: function (view) {
		if (this.props.currentView!==view) {
			this.props.changeView(view);
		}
	},

	renderSplashSlick: function () {
		console.log(Model);
		return Model.getSplashImagesArray().map (function (image, index) {
			return <div key={index} className="splash-image-element"><img src={image['image-src']} /></div>;
		});
	},

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row splash-screen">
				<img className="splash-screen-award" src="./build/images/media-award-image-splash.png" alt="Award pic goes here" />
					<div className="splash-image-outer">
						<div className="splash-image">
							{this.renderSplashSlick()}
						</div>
					</div>
					<br />
					<br />
					<h1 id="name" onClick={this.handleNameAnimation}>/ROSE DYKINS/</h1>
					<br />
					<h1 className="bigger-text">TRAVEL</h1>
					<br />
					<h1 className="bigger-text">JOURNALIST</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("HOME")}.bind(this)} className={this.props.currentView==="HOME" ? "selected" : null}>{this.props.currentView==="HOME" ? "/ " : null}HOME{this.props.currentView==="HOME" ? " /" : null}</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("ABOUT")}.bind(this)} className={this.props.currentView==="ABOUT" ? "selected" : null}>{this.props.currentView==="ABOUT" ? "/ " : null}ABOUT{this.props.currentView==="ABOUT" ? " /" : null}</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("LATEST_WORK")}.bind(this)} className={this.props.currentView==="LATEST_WORK" ? "selected" : null}>{this.props.currentView==="LATEST_WORK" ? "/ " : null}LATEST WORK{this.props.currentView==="LATEST_WORK" ? " /" : null}</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("BLOG")}.bind(this)} className={this.props.currentView==="BLOG" ? "selected" : null}>{this.props.currentView==="BLOG" ? "/ " : null}BLOG{this.props.currentView==="BLOG" ? " /" : null}</h1>
					<br />
					<h1 onClick={function() {this.handleChangeView("CONTACT")}.bind(this)} className={this.props.currentView==="CONTACT" ? "selected" : null}>{this.props.currentView==="CONTACT" ? "/ " : null}CONTACT{this.props.currentView==="CONTACT" ? " /" : null}</h1>
				</div>
			</div>
		)
	},

	initSlicks: function () {
		$('.splash-image').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  autoplay: true,
		  autoplaySpeed: 10000,
		  speed: 200
		});
	}

});

module.exports = Splashscreen;