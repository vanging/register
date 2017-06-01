let app = new Vue
(
    {
        el:'#register_app',
        template:'<wrapper></wrapper>',
        components:
            {
                wrapper:require('./components/app.vue')
            }
    }
);