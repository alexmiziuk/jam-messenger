document.addEventListener('DOMContentLoaded', function () {
	const inputMessage = document.querySelector('.input-message');
	const mainScreen = document.querySelector('.main-screen');

	let messageCounter = 0;

	inputMessage.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			const messageText = inputMessage.value.trim();
			if (messageText !== '') {
				let truncatedMessage;
				if (messageText === messageText.toUpperCase()) {
					truncatedMessage = messageText.substring(0, 14);
				} else {
					truncatedMessage = messageText.substring(0, 27);
				}
				const messageElement = document.createElement('div');
				messageElement.textContent = truncatedMessage;
				messageElement.classList.add('message');
				if (messageCounter % 2 === 0) {
					messageElement.classList.add('left');
				} else {
					messageElement.classList.add('right');
				}
				mainScreen.appendChild(messageElement);
				inputMessage.value = '';
				messageCounter++;
			}
		}
	});
});



