// Khai báo biến ngôn ngữ hiện tại
var currentLanguage = "vi-en";

// Hàm thay đổi ngôn ngữ
function changeLanguage() {
    currentLanguage = document.getElementById("language").value;
    if (currentLanguage === "en-vi") {
        window.location.href = "English.html";
    }
}

// Hàm viết hoa chữ cái đầu tiên
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Hàm tra cứu từ
function lookup() {
    var word = document.getElementById("word").value; // Lấy từ nhập vào
    var lowerCaseWord = word.toLowerCase(); // Chuyển từ nhập vào thành chữ thường
    var capitalizedWord = capitalizeFirstLetter(lowerCaseWord); // Chuyển chữ cái đầu tiên thành chữ hoa
    var output = document.getElementById("output");
    
    if (dictionary[word]) {
        output.innerHTML = "Phiên âm: /" + dictionary[word].pronunciation + "/ <button onclick='speak(\"" + dictionary[word].meaning + "\")'>Đọc</button><br>" +
                           "Từ Vựng: " + dictionary[word].meaning;
    } else if (dictionary[lowerCaseWord]) {
        output.innerHTML = "Phiên âm: /" + dictionary[lowerCaseWord].pronunciation + "/ <button onclick='speak(\"" + dictionary[lowerCaseWord].meaning + "\")'>Đọc</button><br>" +
                           "Từ Vựng: " + dictionary[lowerCaseWord].meaning;
    } else if (dictionary[capitalizedWord]) {
        output.innerHTML = "Phiên âm: /" + dictionary[capitalizedWord].pronunciation + "/ <button onclick='speak(\"" + dictionary[capitalizedWord].meaning + "\")'>Đọc</button><br>" +
                           "Từ Vựng: " + dictionary[capitalizedWord].meaning;
    } else {
        output.innerHTML = "Không tìm thấy từ trong từ điển.";
    }
}

// Hàm phát âm từ
function speak(word) {
    // Tạo một thể hiện mới của SpeechSynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(word);
    
    // Đặt ngôn ngữ
    utterance.lang = 'en-US';
    
    // Phát âm từ
    window.speechSynthesis.speak(utterance);
}

function closeNotice() {
    document.getElementById('notice').style.display = 'none';
}

function openMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
}

// Get the input field
var input = document.getElementById("word");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Get the current value of the input field
  var word = input.value.toLowerCase();

  // Clear the suggestion box
  var suggestionBox = document.getElementById("suggestionBox");
  suggestionBox.innerHTML = "";

  // Check each word in the dictionary
  for (var key in dictionary) {
    // If the word starts with the input value
    if (key.toLowerCase().startsWith(word)) {
      // Create a new suggestion button
      var btn = document.createElement("BUTTON");
      btn.innerHTML = key;
      btn.onclick = function() {
        // When the button is clicked, update the input field with this word and lookup
        input.value = this.innerHTML;
        lookup();
      }

      // Add the button to the suggestion box
      suggestionBox.appendChild(btn);
    }

    // Stop suggesting words after finding 10 matches
    if (suggestionBox.childNodes.length >= 10) {
      break;
    }
  }
});
var devtools = /./;
devtools.toString = function() {
    this.opened = true;
}

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