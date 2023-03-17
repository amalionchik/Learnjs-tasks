contents.onclick = function(event) {

	function handleLink(href) {
		confirmation = confirm(`Вы действительно хотите перейти на ${href}?`);
		if (!confirmation) return false;
	}

	target = event.target.closest('a');

	if (target && contents.contains(target)) {
		return handleLink(target.getAttribute('href'));
	}
}