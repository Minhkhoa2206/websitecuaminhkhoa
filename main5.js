function lookup() {
    var word = document.getElementById('word').value;
    
    // Kiểm tra xem từ có trong data1.js hay không
    if (data1[word]) {
      document.getElementById('output').innerText = data1[word];
    } else {
      // Nếu không, gọi API của Chat GPT để dịch
      fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-api-key' // Thay 'your-api-key' bằng API Key của bạn
        },
        body: JSON.stringify({
          prompt: 'Translate the following English text to Vietnamese: "' + word + '"',
          max_tokens: 60
        })
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('output').innerText = data.choices[0].text.trim();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
  