import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
var menu = new Menu();
menu.layMenu();
//Xử lý từ menu.mangMonAn viết hàm hiển thị dữ liệu ra giao diện
function renderTableMonAn(mangMonAn) {
    // console.log(mangMonAn);
    var content = ``;
    for (let monAnLocalStorage of mangMonAn) {
        let monAn = new MonAn();
        monAn = { ...monAn, ...monAnLocalStorage };
        content += `
            <tr>
                <td>${monAn.maMon}</td>
                <td>${monAn.tenMon}</td>
                <td>${monAn.loaiMon}</td>
                <td>${monAn.giaMon}</td>
                <td>${monAn.khuyenMai}</td>
                <td>${monAn.tinhGiaKhuyenMai()}</td>
                <td>${monAn.tenTinhTrang}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="chinhSua('${monAn.maMon}')">Sửa</button>
                    <button class="btn btn-danger ml-2" onclick="xoa('${monAn.maMon}')">Xoá</button>
                </td>
            </tr>
        `
    };
    document.querySelector('#tbodyFood').innerHTML = content;
}
renderTableMonAn(menu.mangMonAn)

window.xoa = function(maMonAnClick) {
    //Gọi phương thức xoaMenu trong đối tượng menu
    menu.xoaMenu(maMonAnClick);
    //render lại table món ăn
    renderTableMonAn(menu.mangMonAn);
}

window.chinhSua = function (maMonAnClick) {
    document.querySelector('.modal-title').innerHTML = 'Cập nhật món ăn';
    //Lấy ra món ăn trong menu.mangMonAn 
    let monAn = menu.layThongTinMonAn(maMonAnClick);
    //Đưa thông tin món ăn đó lên giao diện 
    if(monAn) {
        //Đưa dữ liệu lên modal
        console.log('monAnClick',monAn);
        //Lưu ý sửa lại các id trong các thẻ input select textarea giống với các thuộc tính của object monAn
        var arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');

        for(let input of arrInput) {
            // input.style.backgroundColor = 'red';
            let {id} = input;
            input.value = monAn[id];
            //input id="maMon" value => monAn['maMon']
        }

    }
}

document.querySelector('#btnCapNhat').onclick = function (){

    var arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
    var monAnCapNhat = new MonAn();
    for(let input of arrInput){
        let {id,value} = input;
        if (id === 'maLoai') {
            monAnCapNhat['maLoai'] = value;
            //Input đang là select khi chạy đến loại món
            monAnCapNhat['loaiMon'] = input.options[input.selectedIndex].innerHTML;
        } else if (id === 'maTinhTrang') {
            // monAn['tenTinhTrang'] = value === 0 ? 'Hết món' : 'Còn';
            monAnCapNhat['tenTinhTrang'] = input.options[input.selectedIndex].innerHTML;
        }
        else {
            monAnCapNhat[id] = value;
            console.log(id, value);
        }
    }
    //Gọi phương thức cập nhật menu
    menu.capNhatMonAn(monAnCapNhat.maMon,monAnCapNhat)

    //render lại giao diện món ăn
    renderTableMonAn(menu.mangMonAn);
    
    console.log('monAnCapNhat',monAnCapNhat);
}


//Chức năng filter loại món ăn

document.querySelector('#selLoai').onchange = function (){
    //Lấy giá trị người dùng select từ giao diện
    var value = document.querySelector('#selLoai').value;
    var result = menu.locMonAn(value);

    renderTableMonAn(result);
}