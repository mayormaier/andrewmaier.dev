window.onload = function () {

    window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

    console.log(menu_btn);

	console.log("hello");

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

    const showMoreButton = document.getElementById('view-more');
    const moreText = document.getElementById('more');
    const lessText = document.getElementById('less');
    const moreTiles = document.getElementById('grid2');

    showMoreButton.addEventListener('click', function () {
        moreTiles.classList.toggle('is-active');
        moreText.classList.toggle('is-active');
        lessText.classList.toggle('is-active')
    })

    

    

    console.log("loaded");
}