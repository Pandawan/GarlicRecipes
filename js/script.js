// Helper method to find the closest ancestor with the class
function findAncestor(el, cls) {
	let element = el;
	while (!element.classList.contains(cls)) {
		element = element.parentElement;
	}
	return element;
}

function setupNavBar() {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach(($el) => {
			$el.addEventListener('click', () => {
				// Get the target from the "data-target" attribute
				const target = $el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
}

function dataLinks() {
	const dataLink = document.querySelectorAll('[data-link]');

	// Clicking on any card with data-link redirects to link
	dataLink.forEach((element) => {
		element.addEventListener('click', () => {
			document.location = element.dataset.link;
		});
	});
}

function dataCategories() {
	const dataCategory = document.querySelectorAll('[data-category]');
	const heroTitle = document.getElementById('hero-title');
	const backBtn = document.getElementById('back-btn');

	// Clicking on any card with data-link redirects to link
	dataCategory.forEach((element) => {
		element.addEventListener('click', () => {
			heroTitle.innerText = element.dataset.title;
			(findAncestor(element, 'content-page')).classList.add('hidden');
			const contentPage = document.getElementById(`${element.dataset.category}-page`);

			// If the page doesn't exist or it's not the default one, then show the back button
			if (!contentPage || !contentPage.classList.contains('default')) {
				backBtn.classList.remove('hidden');
				// Click on back button goes to "getStartedDiv page"
				backBtn.addEventListener('click', () => {
					const defaultPage = document.querySelectorAll('.default');

					if (defaultPage) {
						contentPage.classList.add('hidden');
						defaultPage[0].classList.remove('hidden');
						backBtn.classList.add('hidden');
						heroTitle.innerText = defaultPage[0].dataset.title;
					}
				});
			} else {
				backBtn.classList.add('hidden');
			}

			document.getElementById(`${element.dataset.category}-page`).classList.remove('hidden');
		});
	});
}

function setupTables() {
	const tables = document.querySelectorAll('table');

	tables.forEach((table) => {
		table.classList.add('table');
	});
}

document.addEventListener('DOMContentLoaded', () => {
	setupNavBar();
	// getStarted();
	dataLinks();
	dataCategories();
	setupTables();
});
