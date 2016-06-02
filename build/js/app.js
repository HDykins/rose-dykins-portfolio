var container = document.getElementById('container');

$('body').on('click', '#container', function (clickEvent) {
	new PdfViewer({pdfUrl: 'Junior developer CV_short', staticHost: 'https://dl.dropboxusercontent.com/u/46887483/Junior%20developer%20CV_short.pdf'}).embed(container);
});