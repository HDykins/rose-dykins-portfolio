var Model = (function initModel() {

	var splashImagesArray = [
		{'image-src': "./build/images/splash-image-1.jpg"},
		{'image-src': "./build/images/splash-image-2.jpg"},
		{'image-src': "./build/images/splash-image-3.jpg"},
		{'image-src': "./build/images/splash-image-4.jpg"},
		{'image-src': "./build/images/splash-image-5.jpg"},
		{'image-src': "./build/images/splash-image-6.jpg"}
	];

	var instagramArray = [
		{'image-src': "./build/images/pansy-cocktail.jpg"},
		{'image-src': "./build/images/blue-stairs.jpg"},
		{'image-src': "./build/images/christ-redeemer.jpg"},
		{'image-src': "./build/images/curry.jpg"},
		{'image-src': "./build/images/barcelona-red-room.jpg"},
		{'image-src': "./build/images/weird-fish.jpg"}
	];

	var previewTravelPicsArray = [
		{'image-src': "./build/images/travel-pics-preview-1.jpg"},
		{'image-src': "./build/images/travel-pics-preview-2.jpg"},
		{'image-src': "./build/images/travel-pics-preview-3.jpg"},
		{'image-src': "./build/images/travel-pics-preview-4.jpg"},
		{'image-src': "./build/images/travel-pics-preview-5.jpg"},
		{'image-src': "./build/images/travel-pics-preview-6.jpg"}
	];

	var articlesArray = [
		{pdf" true, link: "http://origin.misc.pagesuite.com/pdfdownload/ad5926e7-557e-481e-bc98-065e5a5e5b36.pdf", 'image-src': "./build/images/NoIsolation.jpg", description:"A Norwegian start-up is closing the digital generation gap with its "warm technology", title: "Simple tech for senior citizens", "publication": "n by Norwegian"},
		{pdf: true, link: "http://origin.misc.pagesuite.com/pdfdownload/3a079aec-ebcf-49b0-834e-dba4a4302e94.pdf", 'image-src': "./build/images/Antonia.jpg", description: "Designer Antonia Sautter is the creative talent behind the most exclusive masquerade ball in Venice", title: "Behind The Mask", "publication": "Oryx"},
		{pdf: true, link: "https://www.scribd.com/embeds/419053015/content.html", 'image-src': "./build/images/copenhagen-hygge.jpg", description: "The Danish capital combines business and pleasure with aplomb. Is Copenhagen's progressive attitude at the heart of its success?", title: "The Hygge Life", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419053711/content.html", 'image-src': "./build/images/human-library.jpg", description: "The Human Library's premise is simple but powerful: borrow a human 'Book' for 30 minutes, and ask them questions about their lives. The idea is that by examining them, Readers can learn about their own prejudices.", title: "The Human Library", "publication": "n by Norwegian"},
		{pdf: false, link: "https://www.theresident.co.uk/lifestyle-london/travel-take-the-vip-chefs-table-tour-of-madrid/", 'image-src': "./build/images/madrid-chef-tour.jpg", description: "The VIP Chef’s Table tour of Madrid – a luxury foodie adventure that includes a shopping trip to San Anton food market, a cookery course and Michelin-star fine dining", title: "Travel: Take the VIP chef's table tour of Madrid", "publication": "The Resident"},
		{pdf: true, link: "https://issuu.com/squareupmedia/docs/e41/42", 'image-src': "./build/images/big-reveal.png", description: "Would you book a holiday without knowing where you are going? Try the new trend of surprise travel", title: "The Big Reveal", "publication": "Escapism Magazine"},
		{pdf: true, link: "https://www.scribd.com/embeds/419058005/content.html", 'image-src': "./build/images/shed-not-a-shed.png", description: "When it’s a SHED, one of London’s new flat-pack microhomes. Find out why these tiny houses make a lot of sense", title: "When is a shed not a shed?", "publication": "n by Norwegian"},
		{pdf: true, link: "https://www.scribd.com/embeds/419058006/content.html", 'image-src': "./build/images/belly-flop.png", description: "Imagine launching yourself off a 10m-high diving platform, pulling some serious shapes on the way down, before curling up into a ball and hitting the water’s surface at high speed. In the unlikely event that sounds like fun, then Døds might be for you.", title: "How do you make a successful flop?", "publication": "n by Norwegian"},
		{pdf: true, link: "https://www.scribd.com/embeds/419059141/content.html", 'image-src': "./build/images/fashion-forward.png", description: "Dusseldorf's thriving fashion industry has blossomed thanks to the city's avant garde art roots", title: "Fashion Forward", "publication": "Elevate"},
		{pdf: true, link: "https://www.scribd.com/embeds/419059819/content.html", 'image-src': "./build/images/lublin.png", description: "The inventive polish city plans to become a next-generation automotive hub", title: "Lublin's long game", "publication": "Elevate"},
		{pdf: false, link: "https://www.lonelyplanet.com/indonesia/nusa-tenggara/gili-islands/travel-tips-and-articles/which-gili-island-is-for-you", 'image-src': "./build/images/gillifish.jpg", description: "Fringed by white-sand beaches and coconut palms, all three Gilis, located off the northwest coast of Lombok, are a vision of paradise, but each have a distinct personality. Find the one that matches yours.", title: "Which Gili island is for you?", "publication": "Lonely Planet"},
		{pdf: true, link: "https://www.scribd.com/embeds/419060150/content.html", 'image-src': "./build/images/pokemon-go.jpg", description: "It’s day two of our holiday in Dubrovnik but, rather than looking up the ferry schedule to the island of Lokrum or finding the best place to try local speciality ‘dirty macaroni’ (a mix of beef, macaroni and cheese), he’s searching for a Charmander, a Pokémon species.", title: "Holidaying with a monster hunter", "publication": "Metro"},
		{pdf: false, link: "http://www.telegraph.co.uk/travel/gap-year-travel/Gap-years-Voluntourism-who-are-you-helping", 'image-src': "./build/images/voluntourism-children.jpg", description: "Volunteering placements abroad are a popular choice for gap years, but projects need to be chosen wisely or there is a danger participants may end up doing more harm than good.", title: "Gap years: Voluntourism - who are you helping?", "publication": "The Telegraph"},
		{pdf: true, link: "https://www.scribd.com/embeds/419060308/content.html", 'image-src': "./build/images/bintan-bliss.png", description: "The lesser-known Indonesian island of Bintan has all the key ingredients for a high-end, hedonistic honeymoon", title: "Bintan bliss", "publication": "Destinations Weddings and Honeymoons Abroad"},
		{pdf: true, link: "https://www.scribd.com/embeds/419060442/content.html", 'image-src': "./build/images/sollo.png", description: "Brazilian-Spanish chef Diego Gallegos is proving that Michelin-starred food can be sustainable. Rose Dykins learns about fish farming, sturgeon blood and affordable caviar", title: "Going Sollo", "publication": "Good Things Magazine"},
		{pdf: false, link: "http://globetrendermagazine.com/2016/11/06/mama-shelter-opens-rio/", 'image-src': "./build/images/mama-shelter.jpg", description: "Rose Dykins reports on the opening of hipster boutique hotel Mama Shelter in Rio de Janeiro’s creative quarter. It is the sixth property from the trendy French brand, which has partnered with renowned designer Philippe Starck on earlier projects.", title: "Mama Shelter opens in Rio - with space for artists to collaborate", "publication": "Globetrender Magazine"},
		{pdf: true, link: "https://www.scribd.com/embeds/419060545/content.html", 'image-src': "./build/images/maldives-jetty.jpg", description: "Whether you’re looking to dive, dine or detox, the Maldives has you covered. Rose Dykins finds her own slice of paradise", title: "The Maldives - Heaven on earth", "publication": "Good Things Magazine"},
		{pdf: true, link: "https://www.scribd.com/embeds/419060645/content.html", 'image-src': "./build/images/amsterdam-bridge.jpg", description: "Is innovation something that can be taught? THNK Academy believes it can be fostered and harnessed by those with curious mindsets, purpose and passion. Although it is privately funded, THNK was launched as part of a government programme to make the Dutch capital’s creative sector more cutting-edge. ", title: "Amsterdam is placing beta thinking at the heart of its development", "publication": "Business Traveller"},
		{pdf: false, link: "http://www.destinationsguide.co.uk/bali-cycling", 'image-src': "./build/images/bali-cycling.jpg", description: "Rose Dykins explores Ubud on two wheels", title: "Bali: Cycling around rice paddies", "publication": "Country By Country (ABTA)"},
		{pdf: false, link: "http://www.abouttimemagazine.co.uk/travel/about-time-you-went-skiing-in-south-tyrol/", 'image-src': "./build/images/skiing-italy.jpg", description: "Hoping to get a ski trip in this year without the gap yaaaaa vibe? Nestled in the Italian dolomites, the beautiful, interesting and laid-back resorts of Val Senales, Schnalstal and Sulden should be on your list. ", title: "Top 10 reasons to go skiing in South Tyrol, Italy", "publication": "About Time Magazine"},
		{pdf: false, link: "http://www.norwegian.com/magazine/features/2016/03/can-bins-talk", 'image-src': "./build/images/bin-man.jpg", description: "The ones invented by Finnish entrepreneur Fredrik Kekäläinen can. His company Enevo is transforming how rubbish is collected", title: "Can bins talk?", "publication": "N By Norwegian"},
		{pdf: false, link: "https://www.lonelyplanet.com/travel-tips-and-articles/exploring-kota-jakartas-old-town", 'image-src': "./build/images/jakarta-old-town.jpg", description: "While Indonesia’s capital is powering ahead as a global business hub, Kota, its old town, is arguably still its top traveller highlight.", title: "Exploring Kota, Jakarta's old town", "publication": "Lonely Planet"},
		{pdf: false, link: "http://www.abouttimemagazine.co.uk/travel/48-hours-in-brighton-and-hove", 'image-src': "./build/images/brighton-48hrs.jpg", description: "“It’s always sunny in Brighton,” my dad likes to say. It’s obviously not – but what I think he’s getting at, is the feeling many people experience when their train pulls in to Brighton Station, with hills of colourful terraced houses either side of them and the shrill seagull calls echoing in the air.", title: "Perfect weekend: 48 hours in Brighton & Hove", "publication": "About Time Magazine"},
		// {pdf: false, link: "http://www.telegraph.co.uk/travel/destinations/europe/greece/halkidiki/hotels/sani-beach-hotel", 'image-src': "./build/images/sani-beach-hotel-greece.jpg", description: "A microcosm of Mediterranean luxury, Sani Resort comprises four hotels with child-friendly facilities, and a dizzying amount of restaurants.", title: "Sani beach hotel review", "publication": "The Telegraph"},
		{pdf: false, link: "http://www.abouttimemagazine.co.uk/travel/the-ultimate-foodie-guide-to-singapore", 'image-src': "./build/images/singapore-food-guide.jpg", description: "If you’re only in the city for a short time, here’s a suggested itinerary that your tastebuds will thank you for following…", title: "The ultimate foodie guide: Singapore", "publication": "About Time Magazine"},
		{pdf: true, link: "https://www.scribd.com/embeds/419060827/content.html", 'image-src': "./build/images/jakarta-traffic.png", description: "Jakarta’s chaotic traffic is symptomatic of a city whose infrastructure currently cannot cope with the demands of the many who want to feed off its enormous potential. Fortunately, change is on its way", title: "Out of the slow lane", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419061062/content.html", 'image-src': "./build/images/mauritius.png", description: "Decided to take the plunge and elope to Mauritius? Rose Dykins explores settings for intimate weddings and unforgettable honeymoons at opposite ends of the island", title: "Mauritius - North and South", "publication": "Destinations Weddings and Honeymoons Abroad"},
		{pdf: false, link: "http://globetrendermagazine.com/2015/11/27/eye-in-the-sky-british-airways-to-launch-worlds-first-vertical-cable-car/", 'image-src': "./build/images/BA-cable-car.jpg", description: "Brighton resident, Rose Dykins, considers how British Airways’ sponsorship of Brighton’s BAi360 may benefit the attraction", title: "Eye in the sky: British airways to launch world's first vertical cable car", "publication": "Globetrender Magazine"},
		{pdf: false, link: "https://www.lonelyplanet.com/malaysia/kuala-lumpur/travel-tips-and-articles/kuala-lumpur-for-free-exploring-malaysias-capital-on-a-tight-budget", 'image-src': "./build/images/kuala-lumpur-cheap.jpg", description: "You might get more roti for your ringgit in Kuala Lumpur than in many other big Asian capitals, but who doesn’t love a freebie?", title: "Kuala Lumpur for free: exploring Malaysia's capital on a tight budget", "publication": "Lonely Planet"},
		{pdf: false, link: "http://globetrendermagazine.com/2015/10/07/digital-nomads-the-future-of-working-is-travelling", 'image-src': "./build/images/digital-nomads.jpg", description: "These days, many office-based employees require little more than a laptop with the right software and an internet connection to get their job done. Thanks to technology, there are now an estimated 53 million freelancers working across the UK as we speak – probably in their pyjamas.", title: "Digital Nomads: The future of working is... travelling", "publication": "Globetrender Magazine"},
		{pdf: true, link: "https://www.scribd.com/embeds/419061312/content.html", 'image-src': "./build/images/instanbul-shadow-towers.jpg", description: "Successive historical influences make the largest city in Turkey a fascinating destination. Situated where east meets west, Istanbul’s alluring architecture and air of mysticism make it unlike any other city.", title: "Weekend in Istanbul", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419061799/content.html", 'image-src': "./build/images/santorini.jpg", description: "The curious landscape and glorious skies of the volcanic Greek island is mesmerising", title: "Under the setting sun", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419062203/content.html", 'image-src': "./build/images/hostel-furniture.png", description: "Is the new breed of upmarket hostels a viable option for budget business travellers?  People are increasingly turning to hostels for business stays – but not the kind of hostels you will remember.", title: "Bunking down", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419062465/content.html", 'image-src': "./build/images/luggage.jpg", description: "What is the aviation industry doing to stop luggage getting lost in the system?", title: "Handle with care", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419062952/content.html", 'image-src': "./build/images/security-swat.jpg", description: "As growth in emerging markets takes travellers to less developed places, Rose Dykins asks what assistance is available to help you stay safe", title: "Risky business", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419063035/content.html", 'image-src': "./build/images/ancillary.png", description: "Rose Dykins investigates how airline ancillary fees have changed the face of European aviation – and are no longer the reserve of low-cost carriers", title: "Ancillary charges - Strings attached", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419063107/content.html", 'image-src': "./build/images/koh-samui.png", description: "From coconut palms to plunge pools, Koh Samui is the perfect place to be marooned, finds Rose Dykins", title: "Ocean view", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419063194/content.html", 'image-src': "./build/images/biz-prague.jpg", description: "The Czech capital is working hard to boost foreign investment and show the world that it is not just a pretty face.", title: "Tech Republic", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.scribd.com/embeds/419063297/content.html", 'image-src': "./build/images/in-flight-dining.png", description: "In the battle of the skies, airlines are using their in-flight food to stand out from the competition. Rose Dykins reports on what’s being served up.", title: "What's cooking?", "publication": "Business Traveller"}
	];

	var blogpostsArray = [
		{
			id: "1",
			title: "The best place to go now",
			date: "This is the date",
			post:
			"esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			",
			'image-srcs': ["./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg"],
			'slider-image': "./build/images/latest-posts-1.jpg"
		},
		{
			id: "2",
			title: "The best place to go now",
			date: "This is the date",
			post:
			"esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			",
			'image-srcs': ["./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg"],
			'slider-image': "./build/images/latest-posts-1.jpg"
		},
		{
			id: "3",
			title: "The best place to go now",
			date: "This is the date",
			post:
			"esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			",
			'image-srcs': ["./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg"],
			'slider-image': "./build/images/latest-posts-1.jpg"
		},
		{
			id: "4",
			title: "The best place to go now",
			date: "This is the date",
			post:
			"esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			",
			'image-srcs': ["./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg"],
			'slider-image': "./build/images/latest-posts-1.jpg"
		},
		{
			id: "5",
			title: "The best place to go now",
			date: "This is the date",
			post:
			"esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			",
			'image-srcs': ["./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg"],
			'slider-image': "./build/images/latest-posts-1.jpg"
		},
		{
			id: "6",
			title: "The best place to go now",
			date: "This is the date",
			post:
			"esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve NEWLINE\
			",
			'image-srcs': ["./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg", "./build/images/latest-posts-1.jpg"],
			'slider-image': "./build/images/latest-posts-1.jpg"
		}
	];

	articlesArray.map(function(article){
		var my_image = new Image();
		my_image.src = article['image-src'];
	});

	var galleryPicsArray = [
		{name: "pic-1", 'image-src': "./build/images/gallery/gallery-pic-1.jpg"},
		{name: "pic-2", 'image-src': "./build/images/gallery/gallery-pic-2.jpg"},
		{name: "pic-3", 'image-src': "./build/images/gallery/gallery-pic-3.jpg"},
		{name: "pic-4", 'image-src': "./build/images/gallery/gallery-pic-4.jpg"},
		{name: "pic-5", 'image-src': "./build/images/gallery/gallery-pic-5.jpg"},
		{name: "pic-6", 'image-src': "./build/images/gallery/gallery-pic-6.jpg"},
		{name: "pic-7", 'image-src': "./build/images/gallery/gallery-pic-7.jpg"},
		{name: "pic-8", 'image-src': "./build/images/gallery/gallery-pic-8.jpg"},
		{name: "pic-9", 'image-src': "./build/images/gallery/gallery-pic-9.jpg"},
		{name: "pic-10", 'image-src': "./build/images/gallery/gallery-pic-10.jpg"},
		{name: "pic-11", 'image-src': "./build/images/gallery/gallery-pic-11.jpg"},
		{name: "pic-12", 'image-src': "./build/images/gallery/gallery-pic-12.jpg"},
		{name: "pic-13", 'image-src': "./build/images/gallery/gallery-pic-13.jpg"},
		{name: "pic-14", 'image-src': "./build/images/gallery/gallery-pic-14.jpg"},
		{name: "pic-15", 'image-src': "./build/images/gallery/gallery-pic-15.jpg"},
		{name: "pic-16", 'image-src': "./build/images/gallery/gallery-pic-16.jpg"},
		{name: "pic-17", 'image-src': "./build/images/gallery/gallery-pic-17.jpg"},
		{name: "pic-18", 'image-src': "./build/images/gallery/gallery-pic-18.jpg"},
		{name: "pic-19", 'image-src': "./build/images/gallery/gallery-pic-19.jpg"},
		{name: "pic-20", 'image-src': "./build/images/gallery/gallery-pic-20.jpg"},
		{name: "pic-21", 'image-src': "./build/images/gallery/gallery-pic-21.jpg"},
		{name: "pic-22", 'image-src': "./build/images/gallery/gallery-pic-22.jpg"},
		{name: "pic-23", 'image-src': "./build/images/gallery/gallery-pic-23.jpg"},
		{name: "pic-24", 'image-src': "./build/images/gallery/gallery-pic-24.jpg"},
		{name: "pic-25", 'image-src': "./build/images/gallery/gallery-pic-25.jpg"},
		{name: "pic-26", 'image-src': "./build/images/gallery/gallery-pic-26.jpg"},
		{name: "pic-27", 'image-src': "./build/images/gallery/gallery-pic-27.jpg"},
		{name: "pic-28", 'image-src': "./build/images/gallery/gallery-pic-28.jpg"},
		{name: "pic-29", 'image-src': "./build/images/gallery/gallery-pic-29.jpg"},
		{name: "pic-30", 'image-src': "./build/images/gallery/gallery-pic-30.jpg"},
		{name: "pic-31", 'image-src': "./build/images/gallery/gallery-pic-31.jpg"},
		{name: "pic-32", 'image-src': "./build/images/gallery/gallery-pic-32.jpg"},
		{name: "pic-33", 'image-src': "./build/images/gallery/gallery-pic-33.jpg"},
		{name: "pic-34", 'image-src': "./build/images/gallery/gallery-pic-34.jpg"},
		{name: "pic-35", 'image-src': "./build/images/gallery/gallery-pic-35.jpg"},
		{name: "pic-36", 'image-src': "./build/images/gallery/gallery-pic-36.jpg"},
		{name: "pic-37", 'image-src': "./build/images/gallery/gallery-pic-37.jpg"},
		{name: "pic-38", 'image-src': "./build/images/gallery/gallery-pic-38.jpg"},
		{name: "pic-39", 'image-src': "./build/images/gallery/gallery-pic-39.jpg"},
		{name: "pic-40", 'image-src': "./build/images/gallery/gallery-pic-40.jpg"},
		{name: "pic-41", 'image-src': "./build/images/gallery/gallery-pic-41.jpg"},
		{name: "pic-42", 'image-src': "./build/images/gallery/gallery-pic-42.jpg"},
		{name: "pic-43", 'image-src': "./build/images/gallery/gallery-pic-43.jpg"},
		{name: "pic-44", 'image-src': "./build/images/gallery/gallery-pic-44.jpg"},
		{name: "pic-45", 'image-src': "./build/images/gallery/gallery-pic-45.jpg"},
		{name: "pic-46", 'image-src': "./build/images/gallery/gallery-pic-46.jpg"},
		{name: "pic-47", 'image-src': "./build/images/gallery/gallery-pic-47.jpg"},
		{name: "pic-48", 'image-src': "./build/images/gallery/gallery-pic-48.jpg"},
		{name: "pic-49", 'image-src': "./build/images/gallery/gallery-pic-49.jpg"},
		{name: "pic-50", 'image-src': "./build/images/gallery/gallery-pic-50.jpg"},
		{name: "pic-51", 'image-src': "./build/images/gallery/gallery-pic-51.jpg"},
		{name: "pic-52", 'image-src': "./build/images/gallery/gallery-pic-52.jpg"},
		{name: "pic-53", 'image-src': "./build/images/gallery/gallery-pic-53.jpg"},
		{name: "pic-54", 'image-src': "./build/images/gallery/gallery-pic-54.jpg"},
		{name: "pic-55", 'image-src': "./build/images/gallery/gallery-pic-55.jpg"},
		{name: "pic-56", 'image-src': "./build/images/gallery/gallery-pic-56.jpg"},
		{name: "pic-57", 'image-src': "./build/images/gallery/gallery-pic-57.jpg"},
		{name: "pic-58", 'image-src': "./build/images/gallery/gallery-pic-58.jpg"},
		{name: "pic-59", 'image-src': "./build/images/gallery/gallery-pic-59.jpg"},
		{name: "pic-60", 'image-src': "./build/images/gallery/gallery-pic-60.jpg"}
	];

	var pdfView = false;

	function togglePdfView() {
		if (pdfView) {
			pdfView = false;
		} else {
			pdfView = true;
		}
	}

	function getPdfView() {
		return pdfView;
	}

	function getSplashImagesArray() {
		return splashImagesArray;
	}

	function getInstagramArray() {
		return instagramArray;
	}

	function getPreviewTravelPicsArray() {
		return previewTravelPicsArray;
	}

	function getArticlesArray() {
		return articlesArray;
	}

	function getBlogpostsArray() {
		return blogpostsArray;
	}

	function getGalleryPicsArray() {
		return galleryPicsArray;
	}

	return {
		getSplashImagesArray: getSplashImagesArray,
		getInstagramArray: getInstagramArray,
		getPreviewTravelPicsArray: getPreviewTravelPicsArray,
		getArticlesArray: getArticlesArray,
		getBlogpostsArray: getBlogpostsArray,
		getGalleryPicsArray: getGalleryPicsArray
	};

})();
