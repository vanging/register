<template>
    <div id="register_box">
        <div id="register_box_bg"></div>
        <div id="register_box_content">
            <div id="register_box_header">
                <h2>注册</h2>
                <h4>已有账号？<a href="//www.vanging.com/login">直接登录</a></h4>
            </div>
            <hr>
            <register-form></register-form>
        </div>
    </div>
</template>
<script>
    module.exports =
        {
            data: function ()
            {
                return {};
            },
            components:
                {
                    'register-form': require('./register-form.vue'),
                }
        }
</script>
<style scoped>
    #register_box
    {
        position: relative;
        width: 500px;
        padding:20px;
        border: 1px solid white;
        transition: all .2s;
    }
    #register_box_bg
    {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        background-color: black;
        opacity: 0.5;
    }
    #register_box_content
    {
        position: relative;
        z-index: 999;
        color: white;
    }
    #register_box_header
    {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
</style>
