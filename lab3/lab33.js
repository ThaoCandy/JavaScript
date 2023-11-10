

var ketQua = document.getElementById("contain");
            var baoLoi = document.getElementById("error");
            var KQ;

            function toanHang(a){
                ketQua.innerText += a;
                baoLoi.innerText = "";
            }

            function toanTu(o){
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
                
                ketQua.innerText += '=' + KQ;
            }

            function lamLai(){
                ketQua.innerText = "";
                baoLoi.innerText = "";
            }