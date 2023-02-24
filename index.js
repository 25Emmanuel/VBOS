const btn = document.querySelector('#click_to_convert').addEventListener('click', voice)

function voice () {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (e) {
        console.log(e);
        document.querySelector('#convert_text').value = e.results[0][0].transcript;
    }
    recognition.start();
}