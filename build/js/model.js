var Model = (function initModel() {

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

	return {
		togglePdfView: togglePdfView,
		getPdfView: getPdfView
	};

})();