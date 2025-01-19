import { initSpeechRecognition } from "./speech";

export function simpleSpeech(onSuccessCallback: () => void): HTMLDivElement {
    const recognition = initSpeechRecognition(onSuccessCallback, 'please');

    const container = document.createElement('div');
    container.className = 'challengeContainer'

    const message = document.createElement('div');
    message.className = 'message'
    message.textContent = "Say please";

    const button = document.createElement('button');
    button.textContent = 'Start recording';
    button.addEventListener('click', () => {
        recognition.start();
    })

    container.appendChild(message);
    container.appendChild(button);

    return container;
}
