// script.js
document.getElementById('searchButton').addEventListener('click', function () {
  search();
});

function search() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();

  fetch('https://raw.githubusercontent.com/Minhkhoa2206/CH1/main/questions_and_answers.txt')
    .then(response => response.text())
    .then(data => {
      var lines = data.split('\n');
      var results = [];

      for (var i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(searchInput)) {
          var result = lines.slice(i, i + 6);
          results.push(result);
        }
      }

      displayResults(results);
    })
    .catch(error => console.error('Lỗi khi tải nội dung:', error));
}

function displayResults(results) {
  var searchResultsDiv = document.getElementById('searchResults');
  searchResultsDiv.innerHTML = '';

  if (results.length === 0) {
    searchResultsDiv.innerHTML = 'Không có kết quả phù hợp.';
  } else {
    results.forEach(result => {
      var resultDiv = document.createElement('div');
      resultDiv.classList.add('result');

      result.forEach(line => {
        var resultParagraph = document.createElement('p');
        resultParagraph.textContent = line;
        resultDiv.appendChild(resultParagraph);
      });

      searchResultsDiv.appendChild(resultDiv);
    });
  }
}
