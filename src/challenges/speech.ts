export function initSpeechRecognition(onSuccessCallback: () => void): SpeechRecognition {
    if (!('webkitSpeechRecognition' in window)) {
        throw new Error('Speech recognition is not supported in this browser.')
    } else {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = true;
        recognition.lang = "en-US";
        recognition.interimResults = true;
        recognition.maxAlternatives = 5;

        recognition.onresult = (event) => {
            const results = event.results[0];
            for (let i = 0; i < results.length; i++) {
                console.log(results[i].transcript);

                if (results[i].transcript.toLowerCase() == 'please') {
                    onSuccessCallback();
                }
            }
            recognition.stop();
        }

        return recognition;
    }
}
