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

$('body').on('click', '.slick-slide', function (clickEvent) {
	if (!getPdfView()) {
		$('.main').hide();
		$('#container').show();
		new PdfViewer({pdfUrl: 'Junior developer CV_short', staticHost: 'https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf'}).embed(container);
	}
	togglePdfView();
	console.log(pdfView);
});

$('body').on('click', '#container', function (clickEvent) {
	if (getPdfView()) {
		$('#container').empty().hide();
		$('.main').show();
	}
});

$('#container').hide();

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  adaptiveHeight: true
});

$('.slider-nav').slick({
  centerMode: true,
  slidesToShow: 3,
  speed: 200,
  asNavFor: '.slider-for',
  dots: true,
  adaptiveHeight: true
});
