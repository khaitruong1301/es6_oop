//Sử dụng class 
import { Menu } from '../models/Menu.js';
import { MonAn } from '../models/MonAn.js';

var menu = new Menu();
// Chạy trang food.html => tạo menu và lấy các giá trị đã lưu từ storage ra
menu.layMenu(); 
console.log(menu);

document.querySelector('#btnThemMon').onclick = () => {
    var monAn = new MonAn();
    //Dùng es6 để đưa thông tin từ giao diện vào đối tượng monAn
    var arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
    for (let input of arrInput) {
        //Mỗi lấy ra 1 thẻ (Giống dom đến từng thẻ)
        let { id, value } = input;
        if (id === 'loaiMon') {
            monAn['maLoai'] = value;
            //Input đang là select khi chạy đến loại món
            monAn['loaiMon'] = input.options[input.selectedIndex].innerHTML;
        } else if (id === 'maTinhTrang') {
            // monAn['tenTinhTrang'] = value === 0 ? 'Hết món' : 'Còn';
            monAn['tenTinhTrang'] = input.options[input.selectedIndex].innerHTML;
        }
        else {
            monAn[id] = value;
            console.log(id, value);
        }
    }
    //Dom đến tất cả thẻ li => in thông tin
    var arrLi = document.querySelectorAll('#thongTinMonAn li:not(:first-child)');
    for (let li of arrLi) {
        let { id } = li;
        if (id === 'giaKhuyenMai') {
            li.innerHTML = `
            <div>
                <h6>${id}</h6>
                <p id="pMoTa" class="text-muted">${monAn.tinhGiaKhuyenMai()}</p>
            </div>`
        } else {
            li.innerHTML = `
            <div>
                <h6>${id}</h6>
                <p id="pMoTa" class="text-muted">${monAn[id]}</p>
            </div>
            `
        }
    }
    document.getElementById('imgMonAn').src = monAn.hinhAnh;

    //Sau khi lấy thông tin món ăn thì gọi hàm thêm món ăn vào menu
    menu.themMonAn(monAn);
    //Sau khi thêm món ăn gọi phương thức để lưu món ăn vào localstorage
    menu.luuMenu();
    console.log(menu);

}

// function luuStorage() {

//     //Lưu thông tin mảng các món ăn vào storage
//     let sMenu = JSON.stringify(menu.mangMonAn);
//     localStorage.setItem('menu',sMenu)
// }