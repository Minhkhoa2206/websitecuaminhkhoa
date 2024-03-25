window.addEventListener('load', function() {
    var audio = document.getElementById('audio');
    var canvas = document.getElementById('visualizer');
    var ctx = canvas.getContext('2d');
    var audioContext;
    var analyser;
    var bufferLength;
    var dataArray;
    var isPlaying = false;

    canvas.width = 500;
    canvas.height = 400;

    function initAudioContext() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        var source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        draw();
    }

    function draw() {
        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var sliceWidth = canvas.width * 1.0 / bufferLength;
        var xLeft = 0;
        var xRight = canvas.width;

        for(var i = 0; i < bufferLength; i++) {
            var v = dataArray[i] / 128.0;
            var y = v * canvas.height / 2;

            // Draw from left to right
            ctx.beginPath();
            ctx.moveTo(xLeft, canvas.height / 2);
            ctx.quadraticCurveTo(xLeft + sliceWidth / 2, canvas.height / 2 - y, xLeft + sliceWidth, canvas.height / 2);
            ctx.strokeStyle = 'hsl(' + (i * 360 / bufferLength) + ', 100%, 50%)'; // Color based on audio data
            ctx.stroke();

            // Draw from right to left
            ctx.beginPath();
            ctx.moveTo(xRight, canvas.height / 2);
            ctx.quadraticCurveTo(xRight - sliceWidth / 2, canvas.height / 2 - y, xRight - sliceWidth, canvas.height / 2);
            ctx.strokeStyle = 'hsl(' + (i * 360 / bufferLength) + ', 100%, 50%)'; // Color based on audio data
            ctx.stroke();

            xLeft += sliceWidth;
            xRight -= sliceWidth;
        }
    }

    // When audio starts playing, initialize the audio context and start visualization
    audio.addEventListener('play', function() {
        if (!isPlaying) {
            isPlaying = true;
            initAudioContext();
        }
    });
});

const audioElement = document.getElementById('audio');
const borderElement = document.querySelector('.border-effect::before');

audioElement.addEventListener('play', function() {
  borderElement.style.animation = 'borderAnimation 6s linear infinite';
});

audioElement.addEventListener('pause', function() {
  borderElement.style.animation = 'none';
});


