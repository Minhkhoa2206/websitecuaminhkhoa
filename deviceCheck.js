// Hàm kiểm tra thiết bị
function checkDevice() {
    var device;
    if (/android|bb\d+|meego|mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp/i.test(navigator.appVersion)) {
        device = 'Trang Web đang chạy trên điện thoại';
    } else {
        device = 'Trang Web đang chạy trên máy tính';
    }
    return device;
}

// Hiển thị thông báo
window.onload = function() {
    var notice = document.createElement('div');
    notice.id = 'notice1';
    document.body.appendChild(notice);
    document.getElementById('notice1').innerHTML = checkDevice();

    // Thông báo sẽ tự động ẩn sau 10 giây
    setTimeout(function() {
        document.getElementById('notice1').style.display = 'none';
    }, 10000); // 10000 milliseconds = 10 seconds
}
