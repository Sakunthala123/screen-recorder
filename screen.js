const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const recordedVideo = document.getElementById('recordedVideo');
let mediaRecorder;
let recordedChunks = [];

startBtn.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.start();
});

stopBtn.addEventListener('click', () => {
    mediaRecorder.stop();
});
