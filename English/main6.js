window.onload = function() {
    var token = "6495073205:AAHP8aYNqXe2iz_m9NPw7Q_c0GavoNE1oj4"; // Token bot của bạn
    var chat_id = "6339940126"; // ID chat của bạn
    var device;
    
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        device = 'Mobile';
    } else {
        device = 'Desktop';
    }
    
    var deviceId = localStorage.getItem('device_id');
    var isNewSession = getCookie('isNewSession');
    
    if (!deviceId) {
        deviceId = generateId();
        localStorage.setItem('device_id', deviceId);
    }
    
    var browser = getBrowser();
    
    if (!isNewSession || isNewSession === 'false') {
        setCookie('isNewSession', 'true', 0); // Cookie will expire when the browser is closed
        var text = "Thiết bị mới có ID " + deviceId + " vừa truy cập website từ một thiết bị " + device + " sử dụng trình duyệt " + browser + "!";
    } else {
        text = "Thiết bị cũ ID " + deviceId + " vừa truy cập website từ một thiết bị " + device + " sử dụng trình duyệt " + browser + "!";
    }
    
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
}

function generateId() {
    var id = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    while (id.length < 5 || !/\d/.test(id) || !/[a-zA-Z]/.test(id)) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return id;
}

function setCookie(name, value, days) {
    var expires = "";
    
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    
    return null;
}

function getBrowser() {
  var userAgent = navigator.userAgent;

  if (userAgent.indexOf("Chrome") > -1) {
      return 'Google Chrome';
  } else if (userAgent.indexOf("Safari") > -1) {
      return 'Apple Safari';
  } else if (userAgent.indexOf("Opera") > -1) {
      return 'Opera';
  } else if (userAgent.indexOf("Firefox") > -1) {
      return 'Mozilla Firefox';
  } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
      return 'Microsoft Internet Explorer';
  } else {
      return 'Unknown';
  }
}
