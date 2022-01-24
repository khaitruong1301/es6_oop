export class Menu {
    mangMonAn = []; // [{...},{...},{...}]

    constructor() {

    }

    themMonAn = (monAnMoi) => {
        try
        {
            //Bất kì 1 lệnh nào trong khối try xảy ra lỗi => huỷ k chạy tiếp mà sẽ chạy vào catch 
            //Thêm món ăn vào mảng món ăn
            this.mangMonAn.push(monAnMoi);
        } catch(ex) {
            console.log(ex);
            return false;
        }
        return true;
    } 

    luuMenu = function () {
        let sMenu = JSON.stringify(this.mangMonAn);
        localStorage.setItem('menu',sMenu);
    }
    
    layMenu = function () {
        if (localStorage.getItem('menu')) {
            //Lấy dữ liệu từ localstorage gán vào mangMonAn của đối tượng menu
            this.mangMonAn = JSON.parse(localStorage.getItem('menu'));
        }
    }

    xoaMenu = function (maMonAn) { //3
        //findIndex: hàm tìm 1 giá trị trong mảng thoả với arrow function. Nếu tìm thấy thì trả vè vị trí phần tử đó trong mảng, tìm không thấy thì trả về -1
        //this.mangMonAn = [{maMon:1,...},{maMon:2,...},{maMon:3,...},{maMon:4,....}]

        let indexXoa = this.mangMonAn.findIndex(monAn => monAn.maMon === maMonAn);
        if(indexXoa!==-1){
            this.mangMonAn.splice(indexXoa,1);
            return true;
        }
        return false;
        // this.luuMenu();
    }
    capNhatMonAn = function (maMon,monAnUpdate) {
        //tìm lấy ra món ăn trong mảng
        let monAn = this.layThongTinMonAn(maMon);
        if(monAn) {
            // {
            //     maMon:1,
            //     tenMon:'abc'
            // }
            // monAn.maMon = monAnUpdate.maMon;
            for(let tenThuocTinh in monAn) {
                monAn[tenThuocTinh] = monAnUpdate[tenThuocTinh];
            }
        }
        this.luuMenu();
    }
    layThongTinMonAn = function (maMon) {
        //find(): hàm tìm 1 giá trị trong mảng thoả với arrow function tương tự như findindex => kết quả trả về là giá trị hoặc object nếu tìm thấy. Tìm không thấy thì sẽ trả về undefine
         //this.mangMonAn = [{maMon:1,...},{maMon:2,...},{maMon:3,...},{maMon:4,....}]
        let monAn = this.mangMonAn.find(monAn => monAn.maMon === maMon);
        if(monAn) {
            return monAn;
        }
        return undefined;
    }




    // renderTableMonAn = function (mangMonAn,selectorRender) {
    //     // console.log(mangMonAn);
    //     var content = ``;
    //     for (let monAnLocalStorage of mangMonAn) {
    //         let monAn = new MonAn();
    //         monAn = { ...monAn, ...monAnLocalStorage };
    //         content += `
    //             <tr>
    //                 <td>${monAn.maMon}</td>
    //                 <td>${monAn.tenMon}</td>
    //                 <td>${monAn.loaiMon}</td>
    //                 <td>${monAn.giaMon}</td>
    //                 <td>${monAn.khuyenMai}</td>
    //                 <td>${monAn.tinhGiaKhuyenMai()}</td>
    //                 <td>${monAn.tenTinhTrang}</td>
    //             </tr>
    //         `
    //     };
    //     document.querySelector(selectorRender).innerHTML = content;
    // }

}