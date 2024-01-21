document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = event.target[0].value;
    var password = event.target[1].value;

    if(username === 'admin' && password === '123321') {
        window.location.href = 'quanlywebsite.html';
    } else {
        document.getElementById('error-message').textContent = 'Tên đăng nhập hoặc mật khẩu không đúng.';
    }
});
