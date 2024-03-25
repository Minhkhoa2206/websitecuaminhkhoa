$(document).ready(function() {
    var excelData = null;

    $('#excelFileInput').change(function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, {type: 'array'});
            var sheetName = workbook.SheetNames[0];
            var sheet = workbook.Sheets[sheetName];
            excelData = XLSX.utils.sheet_to_json(sheet, {header: 1});
            renderTable(excelData);
            renderFilterOptions(excelData);
        };
        reader.readAsArrayBuffer(file);
    });

    $('#filterOptions').on('change', '.story-checkbox, .column-checkbox', function() {
        applyFilter(excelData);
    });

    $('#filterButton').click(function() {
        var filteredData = filterMinValues(excelData);
        openPopup(filteredData);
    });

    function renderTable(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<tr>';
            for (var j = 0; j < data[i].length; j++) {
                html += '<td>' + data[i][j] + '</td>';
            }
            html += '</tr>';
        }
        $('#excelDataTable').html(html);
    }

    function renderFilterOptions(data) {
        var uniqueStories = {};
        var uniqueColumns = {};
        var storyOptions = '';
        var columnOptions = '';
        
        for (var i = 1; i < data.length; i++) {
            var story = data[i][0]; // Assuming Story is the first column
            var column = data[i][1]; // Assuming Column is the second column
            
            if (!uniqueStories[story]) {
                storyOptions += '<label><input type="checkbox" class="story-checkbox" value="' + story + '"> ' + story + '</label><br>';
                uniqueStories[story] = true;
            }
            if (!uniqueColumns[column]) {
                columnOptions += '<label><input type="checkbox" class="column-checkbox" value="' + column + '"> ' + column + '</label><br>';
                uniqueColumns[column] = true;
            }
        }
        
        $('.story-checkboxes').html(storyOptions);
        $('.column-checkboxes').html(columnOptions);
    }

    function applyFilter(data) {
        var selectedStories = [];
        $('.story-checkbox:checked').each(function() {
            selectedStories.push($(this).val());
        });
        
        var selectedColumns = [];
        $('.column-checkbox:checked').each(function() {
            selectedColumns.push($(this).val());
        });

        var filteredData = [data[0]]; // Keep header row
        for (var i = 1; i < data.length; i++) {
            var story = data[i][0]; // Assuming Story is the first column
            var column = data[i][1]; // Assuming Column is the second column
            if ((selectedStories.includes(story) || selectedStories.length === 0) &&
                (selectedColumns.includes(column) || selectedColumns.length === 0)) {
                filteredData.push(data[i]);
            }
        }

        renderTable(filteredData);
    }

    function filterMinValues(data) {
        var filteredData = [data[0]]; // Keep header row
        var minP = Infinity;
        var minM2 = Infinity;
        var minM3 = Infinity;

        // Get selected stories
        var selectedStories = [];
        $('.story-checkbox:checked').each(function() {
            selectedStories.push($(this).val());
        });

        // Get selected columns
        var selectedColumns = [];
        $('.column-checkbox:checked').each(function() {
            selectedColumns.push($(this).val());
        });

        // Iterate through data to find minimum values within selected stories and columns
        for (var i = 1; i < data.length; i++) {
            var story = data[i][0]; // Assuming Story is the first column
            var column = data[i][1]; // Assuming Column is the second column

            // Check if the story and column are selected
            if ((selectedStories.includes(story) || selectedStories.length === 0) &&
                (selectedColumns.includes(column) || selectedColumns.length === 0)) {

                // Check and update minimum values for P, M2, and M3
                var pValue = parseFloat(data[i][5]); // Assuming P value is in sixth column
                var m2Value = parseFloat(data[i][9]); // Assuming M2 value is in tenth column
                var m3Value = parseFloat(data[i][10]); // Assuming M3 value is in eleventh column

                if (!isNaN(pValue) && pValue < minP) {
                    minP = pValue;
                }
                if (!isNaN(m2Value) && m2Value < minM2) {
                    minM2 = m2Value;
                }
                if (!isNaN(m3Value) && m3Value < minM3) {
                    minM3 = m3Value;
                }
            }
        }

        // Iterate through data again to filter rows with minimum values within selected stories and columns
        for (var i = 1; i < data.length; i++) {
            var story = data[i][0]; // Assuming Story is the first column
            var column = data[i][1]; // Assuming Column is the second column

            // Check if the story and column are selected
            if ((selectedStories.includes(story) || selectedStories.length === 0) &&
                (selectedColumns.includes(column) || selectedColumns.length === 0)) {

                // Check if P, M2, or M3 value matches with the minimum value
                var pValue = parseFloat(data[i][5]); // Assuming P value is in sixth column
                var m2Value = parseFloat(data[i][9]); // Assuming M2 value is in tenth column
                var m3Value = parseFloat(data[i][10]); // Assuming M3 value is in eleventh column

                if (pValue === minP || m2Value === minM2 || m3Value === minM3) {
                    filteredData.push(data[i]);
                }
            }
        }

        return filteredData;
    }
    function openPopup(data) {
        var popupWindow = window.open('', 'Popup_Window', 'width=600,height=400');
        var popupDocument = popupWindow.document;
    
        var html = '<button id="copyToExcelButton">Copy to Excel</button><br><br>';
        html += '<table border="1">';
        for (var i = 0; i < data.length; i++) {
            html += '<tr>';
            for (var j = 0; j < data[i].length; j++) {
                var cellValue = data[i][j];
                // Tô màu cho các ô chứa giá trị P, M2, M3 nhỏ nhất
                if (j === 5) { // Giả sử cột P nằm ở vị trí thứ 5 trong mỗi hàng
                    var pValue = parseFloat(cellValue);
                    if (!isNaN(pValue) && isMinPValue(pValue, data)) {
                        html += '<td style="background-color: lightgreen;">' + cellValue + '</td>';
                        continue;
                    }
                } else if (j === 9) { // Giả sử cột M2 nằm ở vị trí thứ 9 trong mỗi hàng
                    var m2Value = parseFloat(cellValue);
                    if (!isNaN(m2Value) && isMinM2Value(m2Value, data)) {
                        html += '<td style="background-color: lightblue;">' + cellValue + '</td>';
                        continue;
                    }
                } else if (j === 10) { // Giả sử cột M3 nằm ở vị trí thứ 10 trong mỗi hàng
                    var m3Value = parseFloat(cellValue);
                    if (!isNaN(m3Value) && isMinM3Value(m3Value, data)) {
                        html += '<td style="background-color: orange;">' + cellValue + '</td>';
                        continue;
                    }
                }
                html += '<td>' + cellValue + '</td>';
            }
            html += '</tr>';
        }
        html += '</table>';
    
        // Thêm nút Copy to Excel vào popup
        popupDocument.write(html);
        // Gắn sự kiện click cho nút
        var copyToExcelButton = popupDocument.getElementById('copyToExcelButton');
        copyToExcelButton.addEventListener('click', function() {
            copyDataToExcel(data);
        });
    }
    
    // Hàm kiểm tra xem giá trị P có phải là giá trị nhỏ nhất không
    function isMinPValue(pValue, data) {
        for (var i = 1; i < data.length; i++) {
            var currentValue = parseFloat(data[i][5]); // Giả sử cột P nằm ở vị trí thứ 5 trong mỗi hàng
            if (!isNaN(currentValue) && currentValue < pValue) {
                return false;
            }
        }
        return true;
    }
    
    // Hàm kiểm tra xem giá trị M2 có phải là giá trị nhỏ nhất không
    function isMinM2Value(m2Value, data) {
        for (var i = 1; i < data.length; i++) {
            var currentValue = parseFloat(data[i][9]); // Giả sử cột M2 nằm ở vị trí thứ 9 trong mỗi hàng
            if (!isNaN(currentValue) && currentValue < m2Value) {
                return false;
            }
        }
        return true;
    }
    
    // Hàm kiểm tra xem giá trị M3 có phải là giá trị nhỏ nhất không
    function isMinM3Value(m3Value, data) {
        for (var i = 1; i < data.length; i++) {
            var currentValue = parseFloat(data[i][10]); // Giả sử cột M3 nằm ở vị trí thứ 10 trong mỗi hàng
            if (!isNaN(currentValue) && currentValue < m3Value) {
                return false;
            }
        }
        return true;
    }
    
    // Hàm copy dữ liệu sang Excel (CSV)
    function copyDataToExcel(data) {
        var csvContent = "data:text/csv;charset=utf-8,";
        data.forEach(function(rowArray) {
            var row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
    
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
    }
        
    
});


   
