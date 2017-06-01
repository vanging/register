<template>
    <form id="register_form">
        <div class="input-group">
            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
            <input type="text" id="register_account" class="form-control" placeholder="邮箱">
        </div>
        <div id="register_account_message" class="input-message">&nbsp;</div>
        <div class="input-group">
            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
            <input id="register_password" type="password" class="form-control" placeholder="密码">
        </div>
        <div id="register_password_message" class="input-message">&nbsp;</div>
        <div class="input-group">
            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
            <input id="register_confirm_password" type="password" class="form-control" placeholder="确认密码">
        </div>
        <div id="register_confirm_password_message" class="input-message">&nbsp;</div>
        <button class="btn btn-primary form-control" type="button" id="register_button">注册</button>
    </form>
</template>
<script>
    module.exports =
        {
            data: function () {
                return {};
            },
            components: {}
        }
</script>
<style scoped>
    #register_form
    {
        width: 100%;
        padding-bottom: 20px;
    }
    .input-message
    {
        margin-top: 0;
        margin-bottom: 10px;
        padding: 5px;
    }
</style>