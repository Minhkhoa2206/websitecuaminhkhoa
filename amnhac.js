// Tạo đối tượng Audio với đường dẫn đến file nhạc
var audio = new Audio('music.mp3');

// Sự kiện canplaythrough sẽ kích hoạt khi âm thanh có thể được phát mà không cần buffer thêm
audio.addEventListener('canplaythrough', function () {
    audio.play();
});

// Khởi động việc tải âm thanh
audio.load();
