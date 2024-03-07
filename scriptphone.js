
    var link = document.createElement('link');
    link.rel = 'stylesheet';

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        link.href = 'stylesphone.css'; // Mã cho điện thoại di động
    } else {
        link.href = 'styles.css'; // Mã cho máy tính
    }

    document.getElementsByTagName('head')[0].appendChild(link);
