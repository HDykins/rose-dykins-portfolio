var React = require('react');

var RecentArticles = React.createClass({

	render: function () {
		return (
			<div className="row">
				<h4>RECENT ARTICLES</h4><div className="slider-recent-articles-nav">
					<div className="col-xs-4">
					  <div className="slider-recent-articles-nav-element"></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-recent-articles-nav-element"></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-recent-articles-nav-element"></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-recent-articles-nav-element"></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-recent-articles-nav-element"></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-recent-articles-nav-element"></div>
					</div>  
				</div>	
				<div className="slider-recent-articles">
					<div className="col-xs-4">
					  <div className="slider-recent-articles-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /><p>esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve</p></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-recent-articles-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-recent-articles-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  					  
					  <div className="slider-recent-articles-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-recent-articles-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
					<div className="col-xs-4">  
					  <div className="slider-recent-articles-element"><img src="./build/images/Hiltops-Hideaways1.jpg" /></div>
					</div>
				</div>
			</div>
		)
	}

});

module.exports = RecentArticles;