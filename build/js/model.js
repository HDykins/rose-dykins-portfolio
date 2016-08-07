var Model = (function initModel() {

	var splashImagesArray = [
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"}
	];

	var coffeegramArray = [
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"}
	];

	var videosArray = [
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"}
	];

	var articlesArray = [
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve", title: "The best place to go at the moment really", date: "Date is this yes 606060"},
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "2", date: "22/22/22"},
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "3", date: "33/33/33"},
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "hhhfuhfu feiuhfew ewfuew fehuweuwfhf fwhufi uff nfweuf", date: "44/44/44"},
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "5", date: "55/55/55"},
		{pdf: true, link: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "6", date: "66/66/66"}
	];

	var blogpostsArray = [
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "esrdh eruherf rghveer vegfhev rvuhr vervurv vrvuhrv rvhvv chh ru vhurvhrvuve", title: "The best place to go at the moment really", date: "Date is this yes 606060"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "2", date: "22/22/22"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "3", date: "33/33/33"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "hhhfuhfu feiuhfew ewfuew fehuweuwfhf fwhufi uff nfweuf", date: "44/44/44"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "5", date: "55/55/55"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "6", date: "66/66/66"}
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

	function getVideosArray() {
		return videosArray;
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
		getVideosArray: getVideosArray,
		getArticlesArray: getArticlesArray,
		getBlogpostsArray: getBlogpostsArray
	};

})();

module.exports = Model;