var a = parseInt(prompt("nhap a :")); //nhập giá trị cho biến a từ bàn phím

var b = parseInt(prompt("nhap b :")); //nhập giá trị cho biến b từ bàn phím
var c = parseInt(prompt("nhap c :")); //nhập giá trị cho biến c từ bàn phím
document.write("a=" + a + "<br>" + "b=" + b + "<br>" + "c=" + c); //Hiển thị giá trị của biến a, b và c trên trang web
//// Kiểm tra giá trị của biến
if (a == 0) {
  if (b == 0) {
    if (c == 0) {
      document.write("phuong trinh vo so nghiem");
    } else {
      document.write("phuong trinh vo nghiem ");
    }
  } else {
    let x = -c / b;
    document.write("phuong trinh co nghiem " + x);
  }
} else {
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.write("<br>" + "phuong trinh vo nghiem ");
  } else if ((delta = 0)) {
    let x = (-b / 2) * a;
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(
      "<br>" +
        "Phương trình có 2 nghiệm phân biệt: x1 = " +
        x1 +
        " và x2 = " +
        x2
    );
  }
}
// document.write in ra dòng lệnh
