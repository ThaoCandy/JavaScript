// Câu 1:
let imgs = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let imgsl = document.getElementById('imgsl');
let btn = document.getElementsByClassName('btn');
let x = 0;
function FL(a) {
    btn[0].disabled = false;
    btn[1].disabled = false;

    x = a;
    imgsl.src = '/Pic/' + imgs[x];
    event.target.disabled = true;
}

function changeImg(n){
    x = x + n;
    slide(x);
}
function slide(n) {
    n < 0 ? x = imgs.length - 1 : undefined;
    n == imgs.length ? x = 0 : undefined;

    if (x == 0) {
        btn[0].disabled = true;
        btn[1].disabled = false;
    } else if (x == imgs.length - 1) {
        btn[0].disabled = false;
        btn[1].disabled = true;
    } else {
        btn[0].disabled = false;
        btn[1].disabled = false;
    }
    imgsl.src = '/Pic/' + imgs[x];

}
var a;
function start(){
    a = setInterval(function(){
        changeImg(1);
    }, 1500)
}
function stop(){
    clearInterval(a);
}

// Câu 2:
let donGia = document.getElementById('donGia');
let amount = document.getElementById('amount');
let sl = document.getElementsByName('sl')[0];
let addedItem = document.getElementsByName('addedItem')[0];
let kem =  document.getElementsByName('kem');
let ship =  document.getElementsByName('ship');

function TinhGia(){
    let gia = 0;
    for( let k of kem){
        if(k.checked){
            gia += Number(k.value);
        }
    }
    gia =(gia + Number(addedItem.value))* Number(sl.value);
    
    if(ship[1].checked){
        gia += 100;
    }
    amount.textContent = gia;
}

sl.addEventListener("input", TinhGia);
addedItem.addEventListener("change", function(){
    donGia.textContent = event.target.value;
    TinhGia();
});
for(let k of kem){
    k.addEventListener('change', TinhGia);
}
for(let s of ship){
    s.addEventListener('change', TinhGia);
}

// Validate
let red = document.getElementsByClassName('red');

function DatHang(){
    let name, tel, address, email;
    name = event.target.name.value;
    tel = event.target.tel.value;
    address = event.target.address.value;
    email = event.target.email.value;

    let check = 0;
    if(name.trim() == ""){
        red[0].innerHTML = '*Tên không được để trống';
        check = 1;
    }else{
        red[0].innerHTML = '';
    }
    if(address.trim() == ""){
        red[2].innerHTML = '*Địa chỉ không được để trống';
        check = 1;

    }else{
        red[2].innerHTML = '';
    }

    if(isNaN(tel) || tel[0] != '0'){
        red[1].innerHTML = '*Số điện thoại không hợp lệ';
        check = 1;

    }else{
        red[1].innerHTML = '';
    }

    if(!email.includes('.') || !email.includes('@')){
        red[3].innerHTML = '*Email không hợp lệ';
        check = 1;
    }else{
        let emails = email.split('@');
        if(!emails[1].includes('.') || emails[1][0] == '.'){
            red[3].innerHTML = '*Email phải có ký tự . sau @ cách ra ít nhất 1 ký tự';
            check = 1;
        }else{
            red[3].innerHTML = '';
        }
    }
    if(addedItem.value == '' || sl.value == '0'){
        red[4].innerHTML = '*Bạn chưa chọn sản phẩm hoặc nhập số lượng';
        check = 1;
    }
    if(check == 1){
        return false;
    }
    return true;
}