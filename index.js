// Bài tập mảng

//  thêm số
var arr1 = [];
var arrNew = [];

// Thêm số 
function themSo() {
    var soN = document.getElementById('soN').value * 1;
    arr1.push(soN);
    arrNew.push(soN);
    document.getElementById('nhapSo').innerHTML = arr1;
}

// console.log(arr1);

// Bài 1: Tổng số dương
function tongSoDuong() {
    var tongSoDuong = 0;
    arr1.forEach(function (item) {
        if (item > 0) {
            tongSoDuong += item;
        }
    });
    document.getElementById('tongSoDuong').innerHTML = tongSoDuong;
}
// Bài 2: Đếm số dương

function demSoDuong() {

    var ketqua = 0;
    arr1.forEach(function (item) {
        if (item > 0) {
            ketqua++;
        }
    });
    document.getElementById('demSoDuong1').innerHTML = ketqua;
}
// <!-- Bài 3: Tìm số nhỏ nhất-->
 function timSoNhoNhat() {
    var bienMin = arr1[0] * 1;
    var index = 0;
    for (var i = 1; i < arr1.length;i++) {
        var soNhoNhat = arr1[i] * 1;
        if (soNhoNhat < bienMin) {
            bienMin = soNhoNhat;
            indexx = i;
        }
    };
    document.getElementById('soNhoNhat').innerHTML = bienMin;
 }
//  <!--Bài 4: tìm số dương nhỏ nhất -->
// document.getElementById("btnNhapSo_4").onclick = function () {
    // var bienMinDuong = arrDuong[0];
    // for (var i = 0; i < arrDuong.length; i++) {
    //   if (arrDuong[i] < bienMinDuong) {
    //     bienMinDuong = arrDuong[i];
    //   }
    // }

function soDuongNhoNhat() {

    var arrSoDuong = [];
    arr1.forEach(function (item) {
        if (item > 0) {
            console.log(item);
            arrSoDuong.push(item);
        }
    });

    var bienMin = arrSoDuong[0] * 1;
    var index = 0;
    if (bienMin > 0) {
        for (var i = 1; i < arrSoDuong.length; i++) {
            var soDuongNN = arrSoDuong[i] * 1;
            if (soDuongNN < bienMin) {
                bienMin = soDuongNN;
                index = i;
            }
        };
    }
    document.getElementById('ketSoDuongNn').innerHTML = bienMin;
}
// -- Bài 5: Tìm số chẵn cuối cùng -->
// document.getElementById("timSoChanCuoi").onclick = function () {
   
//     var arrSoChan = [];
//     for (var index = 0; index < arr1.length; index++) {
//       if (arr1[index] % 2 == 0) {
//         arrSoChan.push(arr1[index]);
//       }
//     }
//
function soChanCuoiCung() {
    var arrSoChan = [];
    arr1.forEach(function (item) {
        arrSoChan[0] = -1;
        if (item % 2 == 0) {
            arrSoChan.push(item);
        } 
    });
    // console.log(arrSoChan);
    for (var i = 0; i < arrSoChan.length; i++) {
        var last = arrSoChan[i];
        // if (arrSoChan[i])
    }
    document.getElementById('soChanCuoi').innerHTML = last;
}

// <!-- Bài 6: Đổi chỗ -->

function swap(input, vt1, vt2) {
    var bienTam = input[vt1];
    input[vt1] = input[vt2];
    input[vt2] = bienTam;
}

function doiViTri() {
    // var arrNew = [];
    var viTri1 = document.getElementById('viTri1').value * 1;
    var viTri2 = document.getElementById('viTri2').value * 1;
    // console.log(viTri1, viTri2);

    swap(arrNew, viTri1, viTri2);
    console.log(arrNew);
    document.getElementById('doiViTri').innerHTML = "Mảng sau khi đổi chỗ phần tủ: " + arrNew;
}

// <!-- Bài 7: Sắp xếp tăng dần -->

function sapXepTang() {
    var arrSapXep = [];
    arr1.forEach(function (item) {
        arrSapXep.push(item*1);
    });

    document.getElementById('tangDan').innerHTML = arrSapXep.sort(function(a, b){return a - b});
}

// Bài 8: Số nguyên tố đầu tiên
document.getElementById("btnNhapSo").onclick = function () {
    var soNtDauTien = 0;
    for (var i = 0; i < arr1.length; i++) {
      if (kiemTraSoNguyenTo(arr1[i] * 1)) {
        soNtDauTien = arr1[i];
        break;
      }
    }
  
    document.getElementById("ketQuaSoNt").innerHTML =
      "số nguyên tố đầu tiên = " + soNtDauTien;
  };
  function kiemTraSoNguyenTo(so) {
    
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(so); i++) {
      if (so % i == 0) {
        checkSNT = false;
        break;
      }
    }
    return checkSNT;
  }
//   <!-- Bài 9: Đếm Số Nguyên -->

var arrSoThuc = [];

function themSoThuc() {
    var soThuc = document.getElementById('soThuc').value * 1;
    arrSoThuc.push(soThuc);
    document.getElementById('mangSoThuc').innerHTML = arrSoThuc;
}
console.log(arrSoThuc);

function demSoNguyen() {
    var demSoN = 0;
    for (var i = 0; i < arrSoThuc.length; i++) {
        if(Number.isInteger(arrSoThuc[i]*1) == true) {
            demSoN++;
            console.log(Number.isInteger(arrSoThuc[i]*1));
        }
    }
    document.getElementById('demCacSoNguyen').innerHTML = demSoN;
}
// <!-- Bài 10: So sánh số lượng số âm và số dương -->
function soSanhAmDuong() {
    var demDuong = 0;
    arr1.forEach(function (item) {
        if (item > 0) {
            demDuong++;
        }
    });
    // console.log(demDuong);
    var demAm = 0;
    arr1.forEach(function (item) {
        if (item < 0) {
            demAm++;
        }
    });
    // console.log(demAm);

    if (demDuong > demAm) {
        document.getElementById('ketQuaSoL').innerHTML = "Số dương > Số âm"
    } else if (demDuong < demAm) {
        document.getElementById('ketQuaSoL').innerHTML = "Số dương < Số âm"
    } else if (demDuong = demAm) {
        document.getElementById('ketQuaSoL').innerHTML = "Số dương = Số âm"
    }

}