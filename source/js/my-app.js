var container = document.getElementById('pdf-view');



function handleClosePdfView () {
	$('body').on('click', '.close-button', function (clickEvent) {
		clickEvent.preventDefault();
		console.log(Model.getPdfView());
		if (Model.getPdfView()) {
			$('#pdf-view').empty().hide();
			$('#main-view').show();
		}
		Model.togglePdfView();
	});
}

function addCarouselClickEvents (callback) {
	Model.getArticlesArray().forEach (function (element) {
		console.log('data-' + element['id'] + '');
		$('body').on('click', '.' + element['id'] + '', function (clickEvent) {
			console.log("hi");
			clickEvent.preventDefault();
		    callback();
		});
	});
}

Model.getArticlesArray().forEach (function (element) {
	console.log(element['pdf']);
	console.log(element['url']);
	$('[class="slider-for"]').append($('<div class="slider-for-element"><img src=' + element['image-src'] + ' /><p>' + element['description'] + '</p></div>'));
	$('[class="slider-nav"]').append($('<div class="slider-nav-element ' + element['id'] + '"><img src=' + element['image-src'] + ' /><p>' + element['title'] + '</div>'));
});

Model.getCoffeePicsArray().forEach (function (element) {
	$('[class="coffee-pics-container"]').append($('<div class="col-xs-4"><img src=' + element['image-src'] + ' /><p></p></div>'));
});

$('#pdf-view').hide();

addCarouselClickEvents(function handleCarouselClickEvents () {
		console.log("pdf : " + Model.getPdfView());
		// if (element['pdf']) {
			if (!Model.getPdfView()) {
				$('#main-view').hide();
				$('#pdf-view').show();
				new PdfViewer({pdfUrl: 'Junior developer CV_short', staticHost: 'https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf'}).embed(container);
		    	$('[id="pdf-view"]').append($('<div class="close-button">X</div>'));
			}
			Model.togglePdfView();
		// }
});

handleClosePdfView();

$('.splash-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 200
});

$('.slider-coffeegram').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  speed: 200,
  asNavFor: '.slider-coffeegram-nav'
});

$('.slider-coffeegram-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 200,
  asNavFor: '.slider-coffeegram'
});

$('.slider-videos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  speed: 200,
  asNavFor: '.slider-videos-nav'
});

$('.slider-videos-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 200,
  asNavFor: '.slider-videos'
});

$('.slider-twitter').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  speed: 200,
  asNavFor: '.slider-twitter-nav'
});

$('.slider-twitter-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 200,
  asNavFor: '.slider-twitter'
});

$('.slider-recent-articles').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  asNavFor: '.slider-recent-articles-nav',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-recent-articles-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  asNavFor: '.slider-recent-articles',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-latest-posts').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  asNavFor: '.slider-latest-posts-nav',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-latest-posts-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  asNavFor: '.slider-latest-posts',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// $('.slider-for').slick({
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav',
//   adaptiveHeight: true
// });

// $('.slider-nav').slick({
//   centerMode: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,  
//   speed: 200,
//   asNavFor: '.slider-for',
//   dots: true,
//   adaptiveHeight: true,
//     responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         slidesToShow: 1
//       }
//     }
//   ]
// });