var Model = (function initModel() {

	var splashImagesArray = [
		{'image-src': "./build/images/splash-image-1.jpg"},
		{'image-src': "./build/images/splash-image-2.jpg"},
		{'image-src': "./build/images/splash-image-3.jpg"},
		{'image-src': "./build/images/splash-image-4.jpg"},
		{'image-src': "./build/images/splash-image-5.jpg"},
		{'image-src': "./build/images/splash-image-6.jpg"}
	];

	var coffeegramArray = [
		{'image-src': "./build/images/coffeegram-image-1.jpg"},
		{'image-src': "./build/images/coffeegram-image-1.jpg"},
		{'image-src': "./build/images/coffeegram-image-1.jpg"},
		{'image-src': "./build/images/coffeegram-image-1.jpg"},
		{'image-src': "./build/images/coffeegram-image-1.jpg"},
		{'image-src': "./build/images/coffeegram-image-1.jpg"}
	];

	var previewTravelPicsArray = [
		{'image-src': "./build/images/travel-pics-preview-1.jpg"},
		{'image-src': "./build/images/travel-pics-preview-1.jpg"},
		{'image-src': "./build/images/travel-pics-preview-1.jpg"},
		{'image-src': "./build/images/travel-pics-preview-1.jpg"},
		{'image-src': "./build/images/travel-pics-preview-1.jpg"},
		{'image-src': "./build/images/travel-pics-preview-1.jpg"}
	];

	var articlesArray = [
		{pdf: true, link: "http://docdro.id/YcwPFQA", 'image-src': "./build/images/articles-image-1.jpg", description: "esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve", title: "The best place to go at the moment really", date: "Date is this yes 606060"},
		{pdf: true, link: "www.docdroid.net/YcwPFQA/bulkhead-assembly-1.pdf", 'image-src': "./build/images/articles-image-2.jpg", description: "descriptionExample", title: "titleExample", date: "22/22/22"},
		{pdf: true, link: "www.docdroid.net/YcwPFQA/bulkhead-assembly-1.pdf.html", 'image-src': "./build/images/articles-image-3.jpg", description: "descriptionExample", title: "titleExample", date: "33/33/33"},
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/pdfs/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "descriptionExample", title: "hhhfuhfu feiuhfew ewfuew fehuweuwfhf fwhufi uff nfweuf", date: "44/44/44"},
		{pdf: false, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "descriptionExample", title: "titleExample", date: "55/55/55"},
		{pdf: false, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "descriptionExample", title: "titleExample", date: "66/66/66"}
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

	function getCoffeegramArray() {
		return coffeegramArray;
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


	return {
		getSplashImagesArray: getSplashImagesArray,
		getCoffeegramArray: getCoffeegramArray,
		getPreviewTravelPicsArray: getPreviewTravelPicsArray,
		getArticlesArray: getArticlesArray,
		getBlogpostsArray: getBlogpostsArray
	};

})();

module.exports = Model;