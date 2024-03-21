document.getElementById('excel-file').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const excelContent = document.getElementById('excel-content');
        excelContent.innerHTML = XLSX.utils.sheet_to_html(sheet);
    };

    reader.readAsArrayBuffer(file);
}

document.getElementById('filter-modal-max').addEventListener('click', filterModalMax);

function filterModalMax() {
    const excelContent = document.getElementById('excel-content');
    const tables = excelContent.getElementsByTagName('table');
    const maxEntriesUX = [];
    const maxEntriesUY = [];

    for (let table of tables) {
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

            // Tìm Case, Mode và Period của hàng có UX và UY max
            let maxCaseUX, maxModeUX, maxPeriodUX;
            let maxCaseUY, maxModeUY, maxPeriodUY;

            if (maxUX === ux1) {
                maxCaseUX = caseValue1;
                maxModeUX = modeValue1;
                maxPeriodUX = periodValue1;
            } else if (maxUX === ux2) {
                maxCaseUX = cells2[0].innerText;
                maxModeUX = cells2[1].innerText;
                maxPeriodUX = cells2[2].innerText;
            } else {
                maxCaseUX = cells3[0].innerText;
                maxModeUX = cells3[1].innerText;
                maxPeriodUX = cells3[2].innerText;
            }

            if (maxUY === uy1) {
                maxCaseUY = caseValue1;
                maxModeUY = modeValue1;
                maxPeriodUY = periodValue1;
            } else if (maxUY === uy2) {
                maxCaseUY = cells2[0].innerText;
                maxModeUY = cells2[1].innerText;
                maxPeriodUY = cells2[2].innerText;
            } else {
                maxCaseUY = cells3[0].innerText;
                maxModeUY = cells3[1].innerText;
                maxPeriodUY = cells3[2].innerText;
            }

            // Thêm dữ liệu vào mảng maxEntriesUX và maxEntriesUY
            maxEntriesUX.push({ case: maxCaseUX, mode: maxModeUX, period: maxPeriodUX, ux: maxUX });
            maxEntriesUY.push({ case: maxCaseUY, mode: maxModeUY, period: maxPeriodUY, uy: maxUY });
        }
    }

    // Tạo cửa sổ modal
    const modalWindow = window.open('', 'Modal Window', 'width=800,height=400');

    // Viết nội dung HTML cho cửa sổ modal
    modalWindow.document.write('<html><head><title>Max UX and UY</title>');
    modalWindow.document.write('<style>table { border-collapse: collapse; width: 100%; }');
    modalWindow.document.write('th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }</style>');
    modalWindow.document.write('</head><body>');

    // Hiển thị bảng cho Max UX
    modalWindow.document.write('<h2>Max UX</h2>');
    modalWindow.document.write('<table>');
    modalWindow.document.write('<thead><tr><th>Case</th><th>Mode</th><th>Period</th><th>Max UX</th></tr></thead><tbody>');
    for (let entry of maxEntriesUX) {
        modalWindow.document.write(`<tr><td>${entry.case}</td><td>${entry.mode}</td><td>${entry.period}</td><td>${entry.ux}</td></tr>`);
    }
    modalWindow.document.write('</tbody></table>');

    // Hiển thị bảng cho Max UY
    modalWindow.document.write('<h2>Max UY</h2>');
    modalWindow.document.write('<table>');
    modalWindow.document.write('<thead><tr><th>Case</th><th>Mode</th><th>Period</th><th>Max UY</th></tr></thead><tbody>');
    for (let entry of maxEntriesUY) {
        modalWindow.document.write(`<tr><td>${entry.case}</td><td>${entry.mode}</td><td>${entry.period}</td><td>${entry.uy}</td></tr>`);
    }
    modalWindow.document.write('</tbody></table>');

    modalWindow.document.write('</body></html>');
    modalWindow.document.close();
}
