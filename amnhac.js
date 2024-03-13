// Tạo đối tượng Audio với đường dẫn đến file nhạc
var audio = new Audio('music1.mp3');

// Hàm xử lý sự kiện click để phát nhạc
function playMusic() {
    // Sự kiện canplaythrough sẽ kích hoạt khi âm thanh có thể được phát mà không cần buffer thêm
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });

    // Khởi động việc tải âm thanh (nếu không cần, bạn có thể bỏ dòng này)
    audio.load();
}

// Gán sự kiện click cho một phần tử trên màn hình (ví dụ: body)
document.body.addEventListener('click', playMusic);
