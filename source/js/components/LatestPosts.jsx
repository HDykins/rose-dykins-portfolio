var React = require('react');

var LatestPosts = React.createClass({

	render: function () {
		return (
			<div className="col-xs-8">
				<h4 className="fullwidth-header">LATEST POSTS</h4>
				<div className="slider-latest-posts-nav">
					<div className="col-xs-4">
					  <div className="slider-latest-posts-nav-element"></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-latest-posts-nav-element"></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-latest-posts-nav-element"></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-latest-posts-nav-element"></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-latest-posts-nav-element"></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-latest-posts-nav-element"></div>
					</div>  
				</div>	
				<div className="slider-latest-posts">
					<div className="col-xs-4">
					  <div className="slider-latest-posts-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /><h4>I went here and it was good</h4><span>Date is this yes 606060</span><p>esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve</p></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-latest-posts-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-latest-posts-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-latest-posts-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-latest-posts-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-latest-posts-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
				</div>
			</div>	
		)
	}

});

module.exports = LatestPosts;