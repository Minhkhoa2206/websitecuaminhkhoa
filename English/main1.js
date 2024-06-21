// Hàm thay đổi ngôn ngữ
function changeLanguage() {
    const currentLanguage = document.getElementById("language").value;
    window.location.href = currentLanguage === "en-vi" ? "English.html" : "English2.html";
}

function lookup() {
    const word = document.getElementById("word").value.toLowerCase();
    const output = document.getElementById("output");
    const dictionaryEntry = Object.entries(dictionary).find(([key]) => key.toLowerCase() === word);

    if (dictionaryEntry) {
        const [ , { pronunciation, meaning } ] = dictionaryEntry;
        output.innerHTML = `Pronunciation: /${pronunciation}/ <button id='speak' class='speak-button'>Đọc</button><br>Meaning Vietnamese: ${meaning}`;

        document.getElementById("speak").onclick = function() {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.gender === 'female') || undefined;
            window.speechSynthesis.speak(utterance);
        }
    } else {
        output.innerHTML = "Word not found in dictionary.";
    }
}

document.getElementById("word").addEventListener("keyup", function(event) {
  const word = event.target.value.toLowerCase();
  const suggestionBox = document.getElementById("suggestionBox");
  suggestionBox.innerHTML = "";

  Object.keys(dictionary).filter(key => key.toLowerCase().startsWith(word)).slice(0, 10).forEach(suggestion => {
      const btn = document.createElement("BUTTON");
      btn.innerHTML = suggestion;
      btn.onclick = function() {
        event.target.value = this.innerHTML;
        lookup();
      }

      suggestionBox.appendChild(btn);
  });
});

const devtools = /./;
devtools.toString = function() { this.opened = true; }
console.debug('%c', devtools);

setInterval(function() {
    if (devtools.opened) {
        console.log('%c⚠️ Dừng Lại ! , ', 'color: red; font-size: 30px;');
        console.log('%c⚠️ Bạn Tính Làm Gì Cơ Chứ ! , ', 'color: red; font-size: 30px;');
        console.log('%c⚠️ Không Có Gì Để Phá Đâu ! , ', 'color: red; font-size: 30px;');
        console.log('%c⚠️ Mọi thắc mắc Liên Hệ: 0867544809 ! , ', 'color: red; font-size: 30px;');
        devtools.opened = false;
    }
}, 1000);





