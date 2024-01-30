function convertImage() {
    const fileInput = document.getElementById('fileInput');
    const targetExtension = document.getElementById('targetExtension').value;
    const loadingIndicator = document.getElementById('loadingIndicator');
    const downloadLink = document.getElementById('downloadLink');
    const progressBar = document.querySelector('.progress-bar');
  
    if (fileInput.files.length > 0) {
      const originalFile = fileInput.files[0];
      const originalFileName = originalFile.name;
      const originalFileExtension = originalFileName.split('.').pop().toLowerCase();
  
      // Kiểm tra xem đuôi file có trong danh sách cần chuyển không
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif', '.raw', '.webp', '.svg', '.heif', '.heic', '.ico', 'jfif'];
      if (allowedExtensions.includes('.' + originalFileExtension)) {
        loadingIndicator.style.display = 'block';
  
        // Mô phỏng thời gian chuyển đổi (giả định là 3 giây)
        const totalTime = 3000;
        let currentTime = 0;
        const interval = 20; // milliseconds
  
        const updateProgressBar = () => {
          const progress = (currentTime / totalTime) * 100;
          progressBar.style.width = `${progress}%`;
          currentTime += interval;
          if (currentTime <= totalTime) {
            setTimeout(updateProgressBar, interval);
          } else {
            // Đổi đuôi file và tạo liên kết tải xuống
            const newFileName = originalFileName.replace(/\..+$/, targetExtension);
            const blobURL = URL.createObjectURL(originalFile);
            downloadLink.href = blobURL;
            downloadLink.download = newFileName;
  
            // Hiển thị nút Tải xuống
            downloadLink.style.display = 'block';
  
            // Ẩn thanh tiến trình
            loadingIndicator.style.display = 'none';
          }
        };
  
        updateProgressBar();
      } else {
        alert('Đuôi file không hợp lệ. Vui lòng chọn một file ảnh có đuôi trong danh sách.');
      }
    } else {
      alert('Vui lòng chọn một file ảnh.');
    }
  }
  
