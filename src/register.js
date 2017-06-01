function start(e)
{
    e.preventDefault();
    var email=$("#register_email").val();
    var password=$("#register_password").val();
    var confirm_password=$("#register_confirm_password").val();
    if(password!=confirm_password)
    {
        alert('两次输入的密码不匹配');
        return ;
    }
    window.luoc.navbar.register
    (
        {
            email:email,
            password:password
        }
    )
}

function events()
{
    document.body.addEventListener('navbar:register:password_not_valid',function(e)
    {
        "use strict";
        alert('密码最少8位长');
        console.log(e);
    });
    document.body.addEventListener('navbar:register:email_not_valid',function(e)
    {
        "use strict";
        alert('email不合法');
        console.log(e);
    });
    document.body.addEventListener('navbar:register:ok',function(e)
    {
        "use strict";
        alert('注册成功');
        $('#modal_for_register').modal('toggle');
        console.log(e);
    });
    document.body.addEventListener('navbar:register:error',function(e)
    {
        "use strict";
        alert('注册出错');
        console.log(e);
    });
}

module.exports.start=start;
module.exports.events=events;