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
