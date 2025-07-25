$('.dark-btn').click(function () {
	$('.box').toggleclass('dark');
	$('body').toggleclass('dark');
});

$('.spin-btn').click(function () {
	$('.box').toggleclass('spin');
});

$('.reveal-btn').click(function () {
	// $(".chair").addclass("reveal");
	// $(".chair").css("display", "block");
	$('.chair').show();

	// $("-reveal-btn").css("display", "none");
	$('.reveal-btn').hide();
});

$('.draggable').draggable({
	snap: true,
	containment: '.container',
	scroll: false,
	stack: '.draggable',
});
