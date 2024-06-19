document.addEventListener("DOMContentLoaded", function() {
    // Tạo phần tử HTML cho thông báo chấp nhận cookie
    const banner = document.createElement('div');
    banner.innerHTML = `
        <div class="cookie-consent-banner" id="cookieConsentBanner">
            Trang web này sử dụng cookie để đảm bảo bạn có trải nghiệm tốt nhất. 
            Bằng cách tiếp tục sử dụng trang web này, bạn đồng ý với việc sử dụng cookie của chúng tôi.
            <button id="acceptCookies">Đồng ý</button>
        </div>
    `;
    document.body.appendChild(banner);

    // Thêm CSS cho thông báo cookie
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-consent-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
            display: none;
            z-index: 1000;
        }
        .cookie-consent-banner button {
            background-color: #f1c40f;
            color: #333;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            margin-left: 10px;
        }
    `;
    document.head.appendChild(style);

    const cookieBanner = document.getElementById('cookieConsentBanner');
    const acceptButton = document.getElementById('acceptCookies');

    // Hàm kiểm tra xem người dùng đã chấp nhận cookie chưa
    function hasAcceptedCookies() {
        return localStorage.getItem('cookieConsent') === 'true';
    }

    // Hàm hiển thị thông báo
    function showBanner() {
        cookieBanner.style.display = 'block';
    }

    // Hàm chấp nhận cookie
    function acceptCookies() {
        localStorage.setItem('cookieConsent', 'true');
        cookieBanner.style.display = 'none';
    }

    // Kiểm tra nếu người dùng chưa chấp nhận cookie, hiển thị thông báo
    if (!hasAcceptedCookies()) {
        showBanner();
    }

    // Thêm sự kiện cho nút chấp nhận cookie
    acceptButton.addEventListener('click', acceptCookies);
});
