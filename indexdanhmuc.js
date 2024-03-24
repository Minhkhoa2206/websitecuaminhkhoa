document.addEventListener("DOMContentLoaded", function() {
    var menuItems = [
        { label: "Kho Bản Vẽ + Hồ Sơ Xây Dựng (Freedrawingstore.vn)", link: "khobanve.html" },
        { label:"Donate",link:"https://sites.google.com/view/ketcaumk-pr/donate"},
        { label: "Chu kỳ dao động riêng thứ nhất trong Etabs ", link: "locmas.html" },
        { label: "Dowload bộ công cụ lọc Moment Floor + Beam  ", link: "phanmemloc.html" },
        { label: "Tổng Hợp Tất Cả Phần Mềm", link: "phanmem.html" },
        { label: "Chuyển Đổi Định Dạng Ảnh", link: "chuyendoihinhanh.html" },
        { label: "Chuyển Đổi Kích Thước Ảnh", link: "kichthuocanh.html" },
        { label: "Bo Góc Ảnh", link: "botronanh.html" },
        { label: "Xóa repository ghithub bằng code python.", link: "pythoncode.html" },
        { label: "Code Python chương trình Download Siêu Nhanh Video Youtube.", link: "codeDowload.html" },
        { label: "Tải Phần Mềm MS Project.", link: "Project.html" },
        { label: "Tải Phần Mềm AutoCAD.", link: "autocad.html" },
        { label: "Tải Phần Mềm Office các loại.", link: "office.html" },
        { label: "Lấy Password giải nén các phần mềm.", link: "giainen.html" },
        { label: "Tạo Link tải trực tiếp", link: "https://sites.google.com/site/gdocs2direct/" },
        { label: "400 từ vựng tiếng Anh chuyên ngành xây dựng", link: "English3.html" },
        { label: "Phần Mềm Tính Thể Tích", link: "https://mega.nz/file/T7QByLqB#BNf_nVSHhMHh0FpaE_MIh7mGS7U-DDguO9D_pZEqmig" },
        { label: "Trang Web KetCauMk-Pr cũ.", link: "https://s.net.vn/pOUp" }
    ];

    var menuDanhMuc = document.getElementById("menuDanhMuc");

    // Tạo một mảng các màu sắc ngẫu nhiên
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#0080ff', '#80ff00', '#00ff80'];

    // Tạo phần tử ul cho danh mục
    var ul = document.createElement("ul");
    menuItems.forEach(function(item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.label;
        li.appendChild(a);

        // Tạo một dấu chấm với màu ngẫu nhiên từ mảng colors
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        li.insertBefore(dot, a); // Chèn dấu chấm vào trước thẻ a

        ul.appendChild(li);
    });
    menuDanhMuc.appendChild(ul);

    var menuList = document.getElementById("menuList");
    var searchInput = document.getElementById("searchInput");

    function renderMenu(items) {
        menuList.innerHTML = "";
        items.forEach(function(item) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = item.label;
            a.setAttribute("href", item.link);
            li.appendChild(a);
            menuList.appendChild(li);
        });
    }

    function filterMenuItems(searchTerm) {
        var filteredItems = menuItems.filter(function(item) {
            return item.label.toLowerCase().includes(searchTerm.toLowerCase());
        });
        renderMenu(filteredItems);
    }

    searchInput.addEventListener("input", function() {
        var searchTerm = this.value.trim();
        filterMenuItems(searchTerm);
    });

    // Render initial menu
    renderMenu(menuItems);
});