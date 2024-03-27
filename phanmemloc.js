document.getElementById("startBtn").addEventListener("click", startLoading);

function startLoading() {
  // Hide start button
  document.getElementById("startBtn").style.display = "none";
  // Show loader
  document.getElementById("loaderWrapper").style.display = "flex";

  // Simulate loading process
  setTimeout(function() {
    // Hide loader
    document.getElementById("loaderWrapper").classList.add("hidden");
    // Open link
    window.location.href = "https://drive.google.com/uc?export=download&id=1yE9R4cI-zg4dUKTf6Du6IqdLBuevn8t1";
  }, 10000); // 10 seconds
}

function createCodeRain() {
  const codeRain = document.getElementById('codeRain');
  const characters = '01 abcdefghiklmnopqz@#$%^&*((){}[]\|:"string';
  const numCharacters = characters.length;
  const codeLength = 50;

  for (let i = 0; i < codeLength; i++) {
    const span = document.createElement('span');
    span.textContent = characters.charAt(Math.floor(Math.random() * numCharacters));
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = Math.random() * 3 + 1 + 's';
    codeRain.appendChild(span);
  }
}

createCodeRain();
