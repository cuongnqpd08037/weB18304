let choice;
do {
  choice = parseInt(
    prompt(
      "Nhap lua chon:\n1. Tinh diem trung binh (switch case)\n2. Tinh diem trung binh (if else)\n0. Thoat"
    )
  );

  switch (choice) {
    case 1:
      tinhDiemTrungBinhSwitch();
      break;
    case 2:
      tinhDiemTrungBinhIfElse();
      break;
    case 0:
      alert("Tam biet!");
      break;
    default:
      alert("Lua chon khong hop le!");
      break;
  }
} while (choice != 0);
