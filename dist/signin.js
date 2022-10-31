const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    const ID = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let user = {
        ID: ID,
        pw: password
    };
    let data= JSON.parse(localStorage.getItem(ID));
    if(data== null) alert("Sai tài khoản hoặc mật khẩu");
    else {
        if( !user.ID || !user.pw){
            alert("Vui lòng nhập đầy đủ thông tin!");
        }
        else if(user.ID != data.ID || user.pw != data.pw){
            alert("Sai tài khoản hoặc mật khẩu");
        }
        else {
            window.location.href = "phim-user.html";
        }
    }
    
});
