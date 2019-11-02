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
						<a href="./build/181020-Rose-Dykins-cv.pdf" target="_blank" className="fa large-icon fa-arrow-circle-o-down">
						</a>
					</div>
					<div className="col-xs-4 quotes">

						<img src="./build/images/media-award-image.png" alt="Award pic goes here" />
					</div>
					<div className="col-xs-4 about-text">
						<h4 className="about">About</h4>
						<p>Hello!</p>
						<p><strong>My name is Rose Dykins and I’m a freelance travel journalist and writer.</strong> I’m a Londoner originally, but my home for the past few years has been the incredible city of Brighton (well, Hove, actually). I worked as Business Traveller’s staff writer for more than three years, before beginning a freelance career in 2014. I stuffed my backpack full to capacity and travelled around Southeast Asia, successfully pitching ideas to publications such as The Telegraph and Lonely Planet as I went.</p>
						<p>I now work full-time as a freelance writer and journalist. Business travel is my background – and my geekiness for aviation and industry news is still going strong – but I’ve since branched out to cover gap year travel, overseas weddings and honeymoons, gourmet travel, luxury travel and adventure travel, social enterprises and innovations around the world, and small museums.</p>
						<p>I have worked as a journalist and content creator for Connections – an experience-based travel networking company, and part of Jacobs Media Group – where I conduct interviews to camera, compile their digital magazines and write news pages for Travel Weekly and Aspire.</p>
						<p>Copywriting and editing for travel management companies is also something I do regularly, as well as researching and writing industry reports for travel heavyweights such as <a href="http://www.amadeus.com/documents/future-traveller-tribes-2030/luxury-travel/shaping-the-future-of-luxury-travel-report.pdf" target="_blank">Amadeus</a>.</p>
						<p>I am also a producer for Brighton’s Museum of Ordinary People (MOOP), a pop-up museum that celebrates the ripples ordinary people leave behind – the magic and mundanity of everyday life. MOOP won the Best Visual Arts award at the 2018 Brighton Fringe Festival, and our plans for word domination are going strong! I’m delighted to apply my passion for telling other people’s stories to this very special project, which was the brainchild of creatives Jolie Booth and Lucy Malone.</p>
						{/*<p>Recently, I also became Co-Chapter Leader of <a href="https://travelmassive.com/chapters/brighton" target="_blank">Brighton Travel Massive</a>, a networking group for travel folk based in my fair city by the sea, which is great fun.</p>*/}
						<p>If you’re interested in working with me in some way, please don’t hesitate to get in touch, I’d love to hear from you.</p>
					</div>
				</div>
			</section>
		);
	},

});

						// <h4 className="about">Quotes</h4>
						// <blockquote>Quote pending</blockquote>
						// <h4>Quotee pending</h4>
						// <blockquote>Quote pending</blockquote>
						// <h4>Quotee pending</h4>

module.exports = AboutPage;