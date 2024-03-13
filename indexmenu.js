// Mảng chứa nội dung của menu
var menuItems = [
  { label: "Trang Chủ", href: "index.html" },
  { label: "Kho Bản Vẽ Xây Dựng", href: "khobanve.html", target: "_blank" },
  { label: "Phần Mềm", href: "phanmem.html" },
  { label: "Chính sách quyền riêng tư", href: "quyenriengtu.html", target: "_blank" },
  { label: "KetCauMkPr Cũ", href: "https://s.net.vn/pOUp", target: "_blank" },
  { label: "View-Source", href: "https://by.tn/viewcode", target: "_blank" }
];
// Thêm nội dung menu vào trong một thẻ div có id là "menu"
document.addEventListener("DOMContentLoaded", function() {
  var menuContainer = document.getElementById("menu");
  // Kiểm tra xem menu đã được thêm vào chưa
  if (menuContainer.innerHTML.trim() === '') {
      // Chỉ thêm menu nếu "menu" div là trống
      menuItems.forEach(function(item) {
          var menuItem = document.createElement("div");
          var link = document.createElement("a");
          link.textContent = item.label;
          link.href = item.href;
          if (item.target) {
              link.target = item.target;
          }
          menuItem.appendChild(link);
          menuContainer.appendChild(menuItem);
      });
  }
});



// JavaScript để xử lý hiển thị và ẩn menu khi nhấp vào nút menu
function openMenu() {
var menu = document.getElementById("menu");
if (menu.style.display === "none") {
  menu.style.display = "block";
} else {
  menu.style.display = "none";
}
}

// Bắt sự kiện khi trang tải xong để thêm sự kiện click vào nút menu
document.addEventListener("DOMContentLoaded", function() {
var menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", openMenu);
});
