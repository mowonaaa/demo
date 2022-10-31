const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    const ID = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    let user = {
        ID: ID,
        pw: password,
        pwc: passwordConfirm,
    };
    if( !user.ID || !user.pw || !user.pwc){
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
    else if (user.pw.length<8 || user.pw.length>14){
        alert("Sai định dạng");
    }
    else if( user.pw != user.pwc){
        alert("Vui lòng kiểm tra lại mật khẩu")
    }
    else {
        localStorage.setItem(ID, JSON.stringify(user));
        
        alert("Đăng kí thành công");
    }
});
