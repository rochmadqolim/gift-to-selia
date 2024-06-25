window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I Miss U').split('');
    const message = ("Every moment without you feels like an eternity. I miss your smile, your laugh, the way you make everything better. Can't wait to be in your arms again. With all my love, [Selia]").split('');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');
    let titleIndex = 0;
    let messageIndex = 0;

    function appendTitle() {
        if (titleIndex < titles.length) {
            titleElement.innerHTML += titles[titleIndex];
            titleIndex++;
            setTimeout(appendTitle, 300); // 300ms delay
        } else {
            setTimeout(appendMessage, 500); // Delay before showing the message
        }
    }

    function appendMessage() {
        if (messageIndex < message.length) {
            messageElement.innerHTML += message[messageIndex];
            messageIndex++;
            setTimeout(appendMessage, 50); // 50ms delay for each character
        } else {
            messageElement.style.opacity = 1;
        }
    }

    appendTitle();
  }, 1000);
};