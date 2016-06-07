var container = document.getElementById('pdf-view');

$('body').on('click', '.slick-slide', function (clickEvent) {
	clickEvent.preventDefault();
	if (!Model.getPdfView()) {
		$('#main-view').hide();
		$('#pdf-view').show();
		new PdfViewer({pdfUrl: 'Junior developer CV_short', staticHost: 'https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf'}).embed(container);
    	$('[id="pdf-view"]').append($('<div class="close-button">X</div>'));
	}
	Model.togglePdfView();
});

$('body').on('click', '.close-button', function (clickEvent) {
	clickEvent.preventDefault();
	if (Model.getPdfView()) {
		$('#pdf-view').empty().hide();
		$('#main-view').show();
	}
});

$('#pdf-view').hide();

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
  adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});
