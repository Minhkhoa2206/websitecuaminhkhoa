 // Ngăn chặn sự kiện Ctrl+A và sự kiện copy
 document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'a') {
      showAlert('Ctrl+A không được phép!');
      e.preventDefault();
    }
  });

  document.addEventListener('copy', function(e) {
    e.preventDefault(); // Ngăn chặn hành động copy

    var alertDiv = document.getElementById('alertDiv');
    alertDiv.textContent = 'Copy không được phép!';
    alertDiv.style.display = 'block';

    // Thêm dòng chữ vào clipboard
    var clipboardData = e.clipboardData || window.clipboardData;
    var copiedText = 'LIÊN HỆ: 0867544809 (A.Khoa Admin đẹp trai)';
    clipboardData.setData('text/plain', copiedText);

    setTimeout(function() {
      alertDiv.style.display = 'none';
    }, 2000); // Ẩn cảnh báo sau 2 giây
  });

  // Hiển thị cảnh báo
  function showAlert(message) {
    var alertDiv = document.getElementById('alertDiv');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
  }
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
        showNotificationModal('Chúng tôi không đồng ý với việc bạn truy cập vào mã nguồn của chúng tôi.Bạn có thể làm ảnh hưởng đến chúng tôi Liên hệ: '  + adminContact + '. Cảm ơn.');
        e.preventDefault();
    }
});

// Disable context menu (right-click)
document.addEventListener('contextmenu', function (e) {
    showNotificationModal('Quyền hạn bị cấp bị hạn chế bởi Admin. Vui lòng liên hệ ' +  adminContact + '. Cảm ơn.');
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
    const currentDate = now.toDateString();

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    document.getElementById('current-date').innerText = currentDate;

    // Màu sắc ngẫu nhiên cho giờ, phút và giây
    document.getElementById('hours').style.color = getRandomColor();
    document.getElementById('minutes').style.color = getRandomColor();
    document.getElementById('seconds').style.color = getRandomColor();
    
    // Màu sắc ngẫu nhiên cho ngày
    document.getElementById('current-date').style.color = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(updateClock, 1000);
updateClock();




