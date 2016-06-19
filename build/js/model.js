var Model = (function initModel() {

	var articlesArray = [
		{pdf: true, url: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "1", id: "1"},
		{pdf: true, url: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "2", id: "2"},
		{pdf: true, url: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "3", id: "3"},
		{pdf: true, url: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "hhhfuhfu feiuhfew ewfuew fehuweuwfhf fwhufi uff nfweuf", id: "4"},
		{pdf: true, url: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "5", id: "5"},
		{pdf: true, url: "https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf", 'image-src': "./build/images/Hiltops-Hideaways1.jpg", description: "gibbon", title: "6", id: "6"}
	];

	var coffeePicsArray = [
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"},
		{'image-src': "./build/images/Hiltops-Hideaways1.jpg"}
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

	function getArticlesArray() {
		return articlesArray;
	}

	function getCoffeePicsArray() {
		return articlesArray;
	}

	return {
		togglePdfView: togglePdfView,
		getPdfView: getPdfView,
		getArticlesArray: getArticlesArray,
		getCoffeePicsArray: getCoffeePicsArray
	};

})();