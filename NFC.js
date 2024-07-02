document.getElementById('checkNFC').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    try {
        // Kiểm tra xem Web NFC API có được hỗ trợ không
        if ('NDEFReader' in window) {
            resultDiv.textContent = 'Thiết bị này hỗ trợ NFC!';
        } else {
            resultDiv.textContent = 'Thiết bị này không hỗ trợ NFC.';
        }
    } catch (error) {
        resultDiv.textContent = 'Lỗi kiểm tra NFC: ' + error.message;
    }
});
