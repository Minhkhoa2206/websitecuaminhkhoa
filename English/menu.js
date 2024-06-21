var menuItems = [
  { label: "Trang Chủ", href: "index.html" },
  { label: "Kho Bản Vẽ Xây Dựng", href: "khobanve.html", target: "_blank" },
  { label: "Phần Mềm", href: "phanmem.html" },
  { label: "Donate", href: "https://sites.google.com/view/ketcaumk-pr/donate" },
  { label: "Chính sách quyền riêng tư", href: "quyenriengtu.html", target: "_blank" },
  { label: "KetCauMkPr Cũ", href: "https://s.net.vn/pOUp", target: "_blank" },
  { label: "View-Source", href: "https://by.tn/viewcode", target: "_blank" }
];

// Function to populate the menu
function populateMenu() {
  var menuContainer = document.getElementById("menu");
  // Check if menu is already populated
  if (menuContainer.innerHTML.trim() === '') {
    // Populate the menu only if the "menu" div is empty
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
}

// Function to toggle menu visibility
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Event listener for clicking on menu button
document.addEventListener("DOMContentLoaded", function() {
  populateMenu(); // Populate the menu when the page is loaded
  var menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", toggleMenu);
});

// Close menu when clicking outside or scrolling
document.addEventListener("click", function(event) {
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menuBtn");
  if (event.target !== menuBtn && !menu.contains(event.target)) {
    menu.style.display = "none";
  }
});

window.addEventListener("scroll", function() {
  var menu = document.getElementById("menu");
  menu.style.display = "none";
});


