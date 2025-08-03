document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	const copyBox = document.getElementById('demo-copy');
	const emailInput = document.getElementById('demo-email');

	if (!form || !copyBox || !emailInput) return;

	form.addEventListener('submit', function (e) {
		// Remove any existing _cc field before adding a new one
		const existingCc = form.querySelector('input[name="_cc"]');
		if (existingCc) {
			existingCc.remove();
		}

		// If "Email me a copy" is checked, add _cc field
		if (copyBox.checked && emailInput.value) {
			const cc = document.createElement('input');
			cc.type = 'hidden';
			cc.name = '_cc';
			cc.value = emailInput.value;
			form.appendChild(cc);
		}
	});
});
