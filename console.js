var devtools = /./;
devtools.toString = function() {
    this.opened = true;
}

console.debug('%c', devtools);

setInterval(function() {
    if (devtools.opened) {
        console.log('%c⚠️ Dừng Lại ! , ', 'color: red; font-size: 30px;');
        console.log('%c⚠️ Bạn Tính Làm Gì Cơ Chứ ! , ', 'color: red; font-size: 30px;');
        console.log('%c⚠️ Không Có Gì Để Phá Đâu ! , ', 'color: red; font-size: 30px;');
        console.log('%c⚠️ Mọi thắc mắc Liên Hệ: 0867544809 ! , ', 'color: red; font-size: 30px;');
        devtools.opened = false;
    }
}, 1000);