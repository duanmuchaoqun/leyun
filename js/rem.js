//网页自适应JS代码
(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	recalc();

	//禁止页面缩放
try {
	// 禁用双击缩放
	doc.addEventListener("touchstart", function (event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	});
	var lastTouchEnd = 0;
	doc.addEventListener(
		"touchend",
		function (event) {
			var now = new Date().getTime();
			if (now - lastTouchEnd <= 300) {
				event.preventDefault();
			}
			lastTouchEnd = now;
		},
		false
	);
	// 禁用双指手势操作
	doc.addEventListener("gesturestart", function (event) {
		event.preventDefault();
	});
} catch (error) {
	console.log(error)
}
})(document, window);



