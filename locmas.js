document.getElementById('excel-file').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const excelContent = document.getElementById('excel-content');
        excelContent.innerHTML = XLSX.utils.sheet_to_html(sheet);
    };

    reader.readAsArrayBuffer(file);
}

document.getElementById('filter-modal-max').addEventListener('click', filterModalMax);

function filterModalMax() {
    // Lấy dữ liệu từ excel-content
    const excelContent = document.getElementById('excel-content');
    const tables = excelContent.getElementsByTagName('table');
    const data = [];

    // Lấy dữ liệu UX và UY
    const uxData = [];
    const uyData = [];

    // HTML của bảng đầu vào
    let originalTableHTML = '';

    for (let table of tables) {
        originalTableHTML += table.outerHTML; // Lưu HTML của bảng đầu vào

        const rows = table.rows;
        for (let i = 1; i < rows.length; i += 3) { // Lọc theo từng nhóm 3 hàng
            const cells1 = rows[i].cells;
            const cells2 = rows[i + 1].cells;
            const cells3 = rows[i + 2].cells;
            const caseValue1 = cells1[0].innerText;
            const modeValue1 = cells1[1].innerText;
            const periodValue1 = cells1[2].innerText;
            const ux1 = parseFloat(cells1[3].innerText);
            const uy1 = parseFloat(cells1[4].innerText);
            const ux2 = parseFloat(cells2[3].innerText);
            const uy2 = parseFloat(cells2[4].innerText);
            const ux3 = parseFloat(cells3[3].innerText);
            const uy3 = parseFloat(cells3[4].innerText);

            // Tìm max UX và UY trong nhóm 3 hàng
            const maxUX = Math.max(ux1, ux2, ux3);
            const maxUY = Math.max(uy1, uy2, uy3);

            // Thêm dữ liệu vào mảng data
            data.push({ case: caseValue1, mode: modeValue1, period: periodValue1, ux: maxUX, uy: maxUY });

            // Thêm dữ liệu UX và UY vào mảng tương ứng
            uxData.push(maxUX);
            uyData.push(maxUY);
        }
    }

    // Tạo bảng mới cho UX và UY lớn nhất
    const modalWindow = window.open('', 'Modal Window', 'width=800,height=400');
    modalWindow.document.write('<html><head><title>Max UX and UY</title></head><body>');
    modalWindow.document.write('<h2>Original Data</h2>');
    modalWindow.document.write(originalTableHTML); // Hiển thị bảng đầu vào

    modalWindow.document.write('<h2>Max UX</h2>');
    modalWindow.document.write('<table><thead><tr><th>Case</th><th>Mode</th><th>Period</th><th>Max UX</th></tr></thead><tbody>');

    for (let entry of data) {
        modalWindow.document.write(`<tr><td>${entry.case}</td><td>${entry.mode}</td><td>${entry.period}</td><td>${entry.ux}</td></tr>`);
    }

    modalWindow.document.write('</tbody></table>');

    modalWindow.document.write('<h2>Max UY</h2>');
    modalWindow.document.write('<table><thead><tr><th>Case</th><th>Mode</th><th>Period</th><th>Max UY</th></tr></thead><tbody>');

    for (let entry of data) {
        modalWindow.document.write(`<tr><td>${entry.case}</td><td>${entry.mode}</td><td>${entry.period}</td><td>${entry.uy}</td></tr>`);
    }

    modalWindow.document.write('</tbody></table>');
    modalWindow.document.write('</body></html>');
    modalWindow.document.close();
}

