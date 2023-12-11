document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');

    // Thêm sự kiện khi nhấn Enter trên ô nhập liệu
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            search();
        }
    });

    // Thêm sự kiện khi nhấn nút Tìm kiếm
    searchButton.addEventListener('click', function () {
        search();
    });

    function search() {
        var searchInputValue = searchInput.value.toLowerCase();

        fetch('https://raw.githubusercontent.com/Minhkhoa2206/CH1/main/questions_and_answers.txt')
            .then(response => response.text())
            .then(data => {
                var lines = data.split('\n');
                var results = [];

                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].toLowerCase().includes(searchInputValue)) {
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
});
