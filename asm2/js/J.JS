function showProductInfo() {
  document.getElementById("product-info").style.display = "block";
  document.getElementById("hi1").style.display = "none";
}
function hideProductInfo() {
  document.getElementById("hi1").style.display = "block";
  document.getElementById("product-info").style.display = "none";
}
function showProductInfo2() {
  document.getElementById("product-info2").style.display = "block";
  document.getElementById("hi2").style.display = "none";
}
function hideProductInfo2() {
  document.getElementById("hi2").style.display = "block";
  document.getElementById("product-info2").style.display = "none";
}
function showProductInfo3() {
  document.getElementById("product-info3").style.display = "block";
  document.getElementById("hi3").style.display = "none";
}
function hideProductInfo3() {
  document.getElementById("hi3").style.display = "block";
  document.getElementById("product-info3").style.display = "none";
}
function showProductInfo4() {
  document.getElementById("product-info4").style.display = "block";
  document.getElementById("hi4").style.display = "none";
}
function hideProductInfo4() {
  document.getElementById("hi4").style.display = "block";
  document.getElementById("product-info4").style.display = "none";
}
function showProductInfo5() {
  document.getElementById("product-info5").style.display = "block";
  document.getElementById("hi5").style.display = "none";
}
function hideProductInfo5() {
  document.getElementById("hi5").style.display = "block";
  document.getElementById("product-info5").style.display = "none";
}
function showProductInfo6() {
  document.getElementById("product-info6").style.display = "block";
  document.getElementById("hi6").style.display = "none";
}
function hideProductInfo6() {
  document.getElementById("hi6").style.display = "block";
  document.getElementById("product-info6").style.display = "none";
}

// sl 4
function gio() {
  // Thời gian đóng cửa cố định
  const closingTime = new Date();
  closingTime.setHours(22, 30, 0);

  // Tính toán thời gian còn lại đến khi đóng cửa
  const currentTime = new Date();
  const timeLeft = closingTime - currentTime;

  // Chuyển đổi thời gian còn lại thành đơn vị giờ, phút và giây
  const hoursLeft = Math.floor(timeLeft / 3600000);
  const minutesLeft = Math.floor((timeLeft % 3600000) / 60000);
  const secondsLeft = Math.floor(((timeLeft % 3600000) % 60000) / 1000);

  // Hiển thị kết quả lên màn hình

  let time = hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
  document.getElementById("gio3").innerHTML = time;
}

setInterval(gio, 1000);

//h

const background = document.querySelector(".background");

function toggleBackground() {
  background.classList.toggle("active");
}

setInterval(toggleBackground, 10000);
