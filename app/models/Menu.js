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
    xoaMonAn = () => {

    }
    chinhSuaMonAn = () => {

    }
    timKiemMonAn = () => {
        
    }
}