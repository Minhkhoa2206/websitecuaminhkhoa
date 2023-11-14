function openMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    document.getElementById('hours').style.color = getRandomColor();
    document.getElementById('minutes').style.color = getRandomColor();
    document.getElementById('seconds').style.color = getRandomColor();
}

setInterval(updateClock, 1000);
updateClock();
document.firstElementChild.addEventListener("wheel", function(e) {
  if (e.ctrlKey) {
      e.preventDefault();
  }
});

