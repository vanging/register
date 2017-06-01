<template>
    <div id="register_app">
        <register-box></register-box>
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
                    'register-box' : require('./register-box.vue'),
                }
        }
</script>
<style>
    #register_app
    {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }
</style>
<style>
    @import "//at.alicdn.com/t/font_1469889758_9089751.css";
</style>