// Ngăn chặn sao chép, cắt, dán
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Sao chép nội dung bị cấm!');
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
    alert('Cắt nội dung bị cấm!');
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
    alert('Dán nội dung bị cấm!');
});

// Cảnh báo khi cố gắng chụp màn hình
function detectPrintScreen() {
    let beforePrint = () => {
        alert('Chụp màn hình bị cấm!');
    };

    if (window.matchMedia) {
        const mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(beforePrint);
    }

    window.onbeforeprint = beforePrint;
}

detectPrintScreen();
