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
  
  // Thêm sự kiện click để tắt cảnh báo khi bấm chuột
  document.addEventListener('click', function() {
    var alertDiv = document.getElementById('alertDiv');
    alertDiv.style.display = 'none';
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
  
  document.addEventListener('keydown', function (e) {
    // Check for F12 key
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        showNotificationModal('Xin lỗi. Website đang phát triển nên tôi không vì bất kì một lý do gì để làm ảnh hưởng đê= Liên hệ: '  + adminContact + '. Cảm ơn.');
        e.preventDefault();
    }
});

  // Close the notification modal on any click
  document.addEventListener('click', hideNotificationModal);

  document.addEventListener('keydown', function (e) {
    // Check for Ctrl + U key combination
    if (e.ctrlKey && e.key === 'U') {
        showNotificationModal('Chúng tôi không đồng ý với việc bạn truy cập vào mã nguồn của chúng tôi. Bạn có thể làm ảnh hưởng đến chúng tôi. Liên hệ: '  + adminContact + '. Cảm ơn.');
        e.preventDefault();
    }
});

  // Disable context menu (right-click)
  document.addEventListener('contextmenu', function (e) {
      showNotificationModal('Quyền hạn bị cấp bị hạn chế bởi Admin. Vui lòng liên hệ ' +  adminContact + '. Cảm ơn.');
      e.preventDefault();
  });
  

