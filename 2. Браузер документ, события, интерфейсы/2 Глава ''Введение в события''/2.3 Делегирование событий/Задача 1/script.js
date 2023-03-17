panes = document.querySelectorAll('.pane');

for(let pane of panes) {
	pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>')
}



container.onclick = function(event) {
	if (event.target.className != 'remove-button') return;

	let pane = event.target.closest('.pane');
	pane.remove();
 };