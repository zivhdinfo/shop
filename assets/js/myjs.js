
// Hàm để ẩn tất cả tab content và loại bỏ lớp "text-primary" khỏi tất cả tab
function hideAllTabs() {
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("text-primary");
  }
}

// Hàm xử lý khi nhấp vào tab
function depositTab(tabId) {
  hideAllTabs(); // Ẩn tất cả tab content và loại bỏ lớp "text-primary"
  var tabcontent = document.getElementById(tabId);
  tabcontent.style.display = "block"; // Hiển thị tab content tương ứng
  var tablink = document.querySelector(
    "[onclick=\"depositTab('" + tabId + "')\"]"
  );
  tablink.classList.add("text-primary"); // Thêm lớp "text-primary" cho tab chữ
}


// check website 
// Lấy URL hiện tại
var currentURL = window.location.href;

// Danh sách các tên miền hợp lệ
var validDomains = ["robuxvn.net", "rodmin.vn" ,"127.0.0.1:5500"];

// Kiểm tra xem currentURL chứa một trong các tên miền hợp lệ
var isValidDomain = validDomains.some(function(domain) {
    return currentURL.indexOf(domain) !== -1;
});

if (isValidDomain) {         
    // Tên miền hợp lệ, không cần chuyển hướng
    console.log("Design by Zivhd | Contact:  Zivhd.Info");
} else {
     window.location.href = "https://facebook.com/zivhd.username";
}
