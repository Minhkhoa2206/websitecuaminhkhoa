document.firstElementChild.addEventListener("wheel", function(e) {
  if (e.ctrlKey) {
      e.preventDefault();
  }
});

const adminContact = '0867544809';

function showNotificationModal(message) {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.textContent = message;
    notificationModal.style.display = 'flex';
}

function hideNotificationModal() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.style.display = 'none';
}

// Disable F12 key
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        showNotificationModal('Chúng tôi không đồng ý với việc bạn truy cập vào mã nguồn của chúng tôi.Bạn có thể làm ảnh hưởng đến chúng tôi' + adminContact + '. Cảm ơn.');
        e.preventDefault();
    }
});

// Disable context menu (right-click)
document.addEventListener('contextmenu', function (e) {
    showNotificationModal('Quyền hạn bị cấp bị hạn chế bởi Admin. Vui lòng liên hệ ' + adminContact + '. Cảm ơn.');
    e.preventDefault();
});

// Close the notification modal on any click
document.addEventListener('click', hideNotificationModal);


function openMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    document.getElementById('hours').style.color = getRandomColor();
    document.getElementById('minutes').style.color = getRandomColor();
    document.getElementById('seconds').style.color = getRandomColor();
}

setInterval(updateClock, 1000);
updateClock();



window.onload = function() {
    // Kiểm tra xem có phần mềm chặn quảng cáo Adblock Plus hay không
    var isAdblockPlusActive = false;

    // Kiểm tra nếu có thẻ có id 'adblock-test'
    var adblockTest = document.getElementById('adblock-test');
    
    // Nếu không tìm thấy thẻ, có thể Adblock Plus đang chặn nó
    if (!adblockTest || adblockTest.clientHeight === 0) {
        isAdblockPlusActive = true;
    }

    if (isAdblockPlusActive) {
        alert("Trình duyệt của bạn có thể đang sử dụng Adblock Plus hoặc phần mềm chặn quảng cáo tương tự.");
    } else {
        alert("Trình duyệt của bạn có vẻ không sử dụng Adblock Plus hoặc phần mềm chặn quảng cáo tương tự.");
    }
};
