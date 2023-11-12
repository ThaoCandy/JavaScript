

var ketQua = document.getElementById("contain");
            var baoLoi = document.getElementById("error");
            var KQ;
            var kq_cu = 0;

            function toanHang(a){
                if(kq_cu != 0){
                    return;
                }
                ketQua.innerText += a;
                baoLoi.innerText = "";
            }

            function toanTu(o){
                if(kq_cu != 0){
                    ketQua.innerText = kq_cu;
                    kq_cu = 0;
                }
                ketQua.innerText += o;
            }
            
            function thucHien(){
                if(ketQua.innerText == ""){
                    return;
                }
               var contain_text = ketQua.innerText.replace(/[x:]/g, function(a){
                    if(a == 'x'){
                        return '*';

                    }else if( a == ':'){
                        return '/';
                    }
                })

                

                try {
                    KQ = eval(contain_text);

                } catch (error) {
                    baoLoi.innerText = "Lỗi ! Hãy làm lại từ đầu";
                    return;
                }
                kq_cu = KQ;
                ketQua.innerText += '=' + KQ;
            }

            function lamLai(){
                ketQua.innerText = "";
                baoLoi.innerText = "";
                kq_cu = 0;
            }