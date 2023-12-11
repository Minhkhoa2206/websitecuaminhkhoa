chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "search") {
    var url = "https://raw.githubusercontent.com/Minhkhoa2206/CH1/main/questions_and_answers.txt";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var responseData = xhr.responseText;
        var searchTerm = request.term.toLowerCase();
        var results = findMatchingResults(responseData, searchTerm);
        chrome.runtime.sendMessage({ action: "displayResults", results: results });
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
});

function findMatchingResults(data, searchTerm) {
  var lines = data.split("\n");
  var matchingResults = "";

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes(searchTerm)) {
      matchingResults += lines[i] + "<br>";
    }
  }

  return matchingResults;
}
