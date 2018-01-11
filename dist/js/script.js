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

function getStarted() {
	const backBtn = document.getElementById('back-btn');
	const heroTitle = document.getElementById('hero-title');
	const getStartedDiv = document.getElementById('get-started');
	const getWalletBtn = document.getElementById('wallet');
	const getWalletDiv = document.getElementById('get-wallet');

	// Click on GetWallet goes to "getWalletDiv page"
	getWalletBtn.addEventListener('click', () => {
		heroTitle.innerText = 'Wallet';
		backBtn.classList.remove('hidden');
		getStartedDiv.classList.add('hidden');
		getWalletDiv.classList.remove('hidden');
	});

	// Click on back button goes to "getStartedDiv page"
	backBtn.addEventListener('click', () => {
		heroTitle.innerText = 'Getting Started';
		backBtn.classList.add('hidden');
		getStartedDiv.classList.remove('hidden');
		getWalletDiv.classList.add('hidden');
	});
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

document.addEventListener('DOMContentLoaded', () => {
	setupNavBar();
	getStarted();
	dataLinks();
});
