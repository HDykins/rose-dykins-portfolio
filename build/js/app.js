var container = document.getElementById('container');
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

$('body').on('click', '#container', function (clickEvent) {
	if (getPdfView()) {
		$('#container').empty();
	} else {
		new PdfViewer({pdfUrl: 'Junior developer CV_short', staticHost: 'https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf'}).embed(container);
	}
	togglePdfView();
	console.log(pdfView);
});

$('.slick').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3
});
