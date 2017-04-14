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
		{pdf: false, link: "https://www.lonelyplanet.com/indonesia/nusa-tenggara/gili-islands/travel-tips-and-articles/which-gili-island-is-for-you", 'image-src': "./build/images/gillifish.jpg", description: "Fringed by white-sand beaches and coconut palms, all three Gilis, located off the northwest coast of Lombok, are a vision of paradise, but each have a distinct personality. Find the one that matches yours.", title: "Which Gili island is for you?", "publication": "Lonely Planet"},
		{pdf: true, link: "https://www.docdroid.net/tT50DeL/metropokemon.pdf.html", 'image-src': "./build/images/pokemon-go.jpg", description: "It’s day two of our holiday in Dubrovnik but, rather than looking up the ferry schedule to the island of Lokrum or finding the best place to try local speciality ‘dirty macaroni’ (a mix of beef, macaroni and cheese), he’s searching for a Charmander, a Pokémon species.", title: "Holidaying with a monster hunter", "publication": "Metro"},
		{pdf: false, link: "http://www.telegraph.co.uk/travel/gap-year-travel/Gap-years-Voluntourism-who-are-you-helping", 'image-src': "./build/images/voluntourism-children.jpg", description: "Volunteering placements abroad are a popular choice for gap years, but projects need to be chosen wisely or there is a danger participants may end up doing more harm than good.", title: "Gap years: Voluntourism - who are you helping?", "publication": "The Telegraph"},
		{pdf: true, link: "https://www.docdroid.net/KCL95ia/bintan.pdf.html", 'image-src': "./build/images/bintan-bliss.png", description: "The lesser-known Indonesian island of Bintan has all the key ingredients for a high-end, hedonistic honeymoon", title: "Bintan bliss", "publication": "Destinations Weddings and Honeymoons Abroad"},
		{pdf: true, link: "https://www.docdroid.net/24nPzBq/sollo-zp.pdf.html", 'image-src': "./build/images/sollo.png", description: "Brazilian-Spanish chef Diego Gallegos is proving that Michelin-starred food can be sustainable. Rose Dykins learns about fish farming, sturgeon blood and affordable caviar", title: "Going Sollo", "publication": "Good Things Magazine"},
		{pdf: false, link: "http://globetrendermagazine.com/2016/11/06/mama-shelter-opens-rio/", 'image-src': "./build/images/mama-shelter.jpg", description: "Rose Dykins reports on the opening of hipster boutique hotel Mama Shelter in Rio de Janeiro’s creative quarter. It is the sixth property from the trendy French brand, which has partnered with renowned designer Philippe Starck on earlier projects.", title: "Mama Shelter opens in Rio - with space for artists to collaborate", "publication": "Globetrender Magazine"},
		{pdf: true, link: "https://www.docdroid.net/ZwPaL7h/142-143-maldives-1.pdf.html", 'image-src': "./build/images/maldives-jetty.jpg", description: "Whether you’re looking to dive, dine or detox, the Maldives has you covered. Rose Dykins finds her own slice of paradise", title: "The Maldives - Heaven on earth", "publication": "Good Things Magazine"},
		{pdf: true, link: "https://www.docdroid.net/nRdIBDG/amsterdam.pdf.html", 'image-src': "./build/images/amsterdam-bridge.jpg", description: "Is innovation something that can be taught? THNK Academy believes it can be fostered and harnessed by those with curious mindsets, purpose and passion. Although it is privately funded, THNK was launched as part of a government programme to make the Dutch capital’s creative sector more cutting-edge. ", title: "Amsterdam is placing beta thinking at the heart of its development", "publication": "Business Traveller"},
		{pdf: false, link: "http://www.countrybycountry.com/2014/07/bali-cycling/", 'image-src': "./build/images/bali-cycling.jpg", description: "Rose Dykins explores Ubud on two wheels", title: "Bali: Cycling around rice paddies", "publication": "Country By Country (ABTA)"},
		{pdf: false, link: "http://www.abouttimemagazine.co.uk/travel/about-time-you-went-skiing-in-south-tyrol/", 'image-src': "./build/images/skiing-italy.jpg", description: "Hoping to get a ski trip in this year without the gap yaaaaa vibe? Nestled in the Italian dolomites, the beautiful, interesting and laid-back resorts of Val Senales, Schnalstal and Sulden should be on your list. ", title: "Top 10 reasons to go skiing in South Tyrol, Italy", "publication": "About Time Magazine"},
		{pdf: false, link: "http://www.norwegian.com/magazine/features/2016/03/can-bins-talk", 'image-src': "./build/images/bin-man.jpg", description: "The ones invented by Finnish entrepreneur Fredrik Kekäläinen can. His company Enevo is transforming how rubbish is collected", title: "Can bins talk?", "publication": "N By Norwegian"},
		{pdf: false, link: "https://www.lonelyplanet.com/travel-tips-and-articles/exploring-kota-jakartas-old-town", 'image-src': "./build/images/jakarta-old-town.jpg", description: "While Indonesia’s capital is powering ahead as a global business hub, Kota, its old town, is arguably still its top traveller highlight.", title: "Exploring Kota, Jakarta's old town", "publication": "Lonely Planet"},
		{pdf: false, link: "http://www.abouttimemagazine.co.uk/travel/48-hours-in-brighton-and-hove", 'image-src': "./build/images/brighton-48hrs.jpg", description: "“It’s always sunny in Brighton,” my dad likes to say. It’s obviously not – but what I think he’s getting at, is the feeling many people experience when their train pulls in to Brighton Station, with hills of colourful terraced houses either side of them and the shrill seagull calls echoing in the air.", title: "Perfect weekend: 48 hours in Brighton & Hove", "publication": "About Time Magazine"},
		{pdf: false, link: "http://www.telegraph.co.uk/travel/destinations/europe/greece/halkidiki/hotels/sani-beach-hotel", 'image-src': "./build/images/sani-beach-hotel-greece.jpg", description: "A microcosm of Mediterranean luxury, Sani Resort comprises four hotels with child-friendly facilities, and a dizzying amount of restaurants.", title: "Sani beach hotel review", "publication": "The Telegraph"},
		{pdf: false, link: "http://www.abouttimemagazine.co.uk/travel/the-ultimate-foodie-guide-to-singapore", 'image-src': "./build/images/singapore-food-guide.jpg", description: "If you’re only in the city for a short time, here’s a suggested itinerary that your tastebuds will thank you for following…", title: "The ultimate foodie guide: Singapore", "publication": "About Time Magazine"},
		{pdf: true, link: "https://www.docdroid.net/Ktw1SBp/jakarta.pdf.html", 'image-src': "./build/images/jakarta-traffic.png", description: "Jakarta’s chaotic traffic is symptomatic of a city whose infrastructure currently cannot cope with the demands of the many who want to feed off its enormous potential. Fortunately, change is on its way", title: "Out of the slow lane", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/DL8mQic/mauritius.pdf.html", 'image-src': "./build/images/mauritius.png", description: "Decided to take the plunge and elope to Mauritius? Rose Dykins explores settings for intimate weddings and unforgettable honeymoons at opposite ends of the island", title: "Mauritius - North and South", "publication": "Destinations Weddings and Honeymoons Abroad"},
		{pdf: false, link: "http://globetrendermagazine.com/2015/11/27/eye-in-the-sky-british-airways-to-launch-worlds-first-vertical-cable-car/", 'image-src': "./build/images/BA-cable-car.jpg", description: "Brighton resident, Rose Dykins, considers how British Airways’ sponsorship of Brighton’s BAi360 may benefit the attraction", title: "Eye in the sky: British airways to launch world's first vertical cable car", "publication": "Globetrender Magazine"},
		{pdf: false, link: "https://www.lonelyplanet.com/malaysia/kuala-lumpur/travel-tips-and-articles/kuala-lumpur-for-free-exploring-malaysias-capital-on-a-tight-budget", 'image-src': "./build/images/kuala-lumpur-cheap.jpg", description: "You might get more roti for your ringgit in Kuala Lumpur than in many other big Asian capitals, but who doesn’t love a freebie?", title: "Kuala Lumpur for free: exploring Malaysia's capital on a tight budget", "publication": "Lonely Planet"},
		{pdf: false, link: "http://globetrendermagazine.com/2015/10/07/digital-nomads-the-future-of-working-is-travelling", 'image-src': "./build/images/digital-nomads.jpg", description: "These days, many office-based employees require little more than a laptop with the right software and an internet connection to get their job done. Thanks to technology, there are now an estimated 53 million freelancers working across the UK as we speak – probably in their pyjamas.", title: "Digital Nomads: The future of working is... travelling", "publication": "Globetrender Magazine"},
		{pdf: true, link: "https://www.docdroid.net/roCi6W0/084-weekend-istanbul.pdf.html", 'image-src': "./build/images/instanbul-shadow-towers.jpg", description: "Successive historical influences make the largest city in Turkey a fascinating destination. Situated where east meets west, Istanbul’s alluring architecture and air of mysticism make it unlike any other city.", title: "Weekend in Istanbul", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/Lxa7uA1/077-escape-santorini.pdf.html", 'image-src': "./build/images/santorini.jpg", description: "The curious landscape and glorious skies of the volcanic Greek island is mesmerising", title: "Under the setting sun", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/Qp4tvAV/031-hostels.pdf.html", 'image-src': "./build/images/hostel-furniture.png", description: "Is the new breed of upmarket hostels a viable option for budget business travellers?  People are increasingly turning to hostels for business stays – but not the kind of hostels you will remember.", title: "Bunking down", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/EBDfVUP/028-luggage.pdf.html", 'image-src': "./build/images/luggage.jpg", description: "What is the aviation industry doing to stop luggage getting lost in the system?", title: "Handle with care", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/D6bypYn/031-security.pdf.html", 'image-src': "./build/images/security-swat.jpg", description: "As growth in emerging markets takes travellers to less developed places, Rose Dykins asks what assistance is available to help you stay safe", title: "Risky business", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/hmouv3d/034-ancillary-charges.pdf.html", 'image-src': "./build/images/ancillary.png", description: "Rose Dykins investigates how airline ancillary fees have changed the face of European aviation – and are no longer the reserve of low-cost carriers", title: "Ancillary charges - Strings attached", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/XkRxVcJ/077-escape-koh-samui.pdf.html", 'image-src': "./build/images/koh-samui.png", description: "From coconut palms to plunge pools, Koh Samui is the perfect place to be marooned, finds Rose Dykins", title: "Ocean view", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/CaQ459y/biz-prague-2-1.pdf.html", 'image-src': "./build/images/biz-prague.jpg", description: "The Czech capital is working hard to boost foreign investment and show the world that it is not just a pretty face.", title: "Tech Republic", "publication": "Business Traveller"},
		{pdf: true, link: "https://www.docdroid.net/DVY0kmH/in-flight-dining.pdf.html", 'image-src': "./build/images/in-flight-dining.png", description: "In the battle of the skies, airlines are using their in-flight food to stand out from the competition. Rose Dykins reports on what’s being served up.", title: "What's cooking?", "publication": "Business Traveller"}
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
		{name: "pic-1", 'image-src': "./build/images/pansy-cocktail.jpg"},
		{name: "pic-2", 'image-src': "./build/images/blue-stairs.jpg"},
		{name: "pic-3", 'image-src': "./build/images/christ-redeemer.jpg"},
		{name: "pic-4", 'image-src': "./build/images/curry.jpg"},
		{name: "pic-5", 'image-src': "./build/images/barcelona-red-room.jpg"},
		{name: "pic-6", 'image-src': "./build/images/weird-fish.jpg"}
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