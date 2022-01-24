export class MonAn {
    maMon = '';
    tenMon = '';
    loaiMon = '';
    maLoai = '';
    giaMon = 0;
    khuyenMai = 0;
    tenTinhTrang ='';
    maTinhTrang = 0;
    hinhAnh = '' ;
    moTa = '';
    constructor() {

    }

    tinhGiaKhuyenMai = function () {
        return this.giaMon - (this.giaMon * this.khuyenMai / 100);
    }
}

/*
    Mô hình MVC:
    
    V(View): Các file chứa giao diện html
    M(Model): Folder chứa các file cũng là js nhưng là các file class (prototype)
    C(Controller): Folder chứa các file js để xử lý những control (nút nhấn, text input,...) thao tác người dùng.

*/