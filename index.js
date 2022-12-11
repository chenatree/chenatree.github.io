window.addEventListener('load', function () {
    var fm = document.querySelector('form');
    var loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function () {
        //一定要在单击后再获取input框内的值，如果在页面一加载就获取input框里面的值，那么获取的是空值
        var loginTx = document.querySelector('.login-tx').value;
        var loginPsw = document.querySelector('.login-psw').value;
        if (loginTx == '5201314' && loginPsw == 'love520') {
            fm.action = 'rotation.html';
        } else {
            fm.action = 'error.html';
        }
    })

})