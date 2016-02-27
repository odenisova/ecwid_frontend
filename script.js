/**
 * Created by o_denisova on 27.02.16.
 */


    $('.ui.checkbox').checkbox();

    var modal = $('.ui.modal');

    modal
        .modal({
            closable  : false,
            onDeny    : function(){
                return false;
            },
            onApprove : function() {
                return false;
            }
        })
        .modal('show');



    $('#login_form')
        .form({
            username: {
                identifier  : 'username',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your username'
                    },{
                        type: 'length[6]',
                        prompt: 'Your username must be at least 6 characters'
                    }]
            },
            password: {
                identifier  : 'password',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your password'
                    },{
                        type: 'length[6]',
                        prompt: 'Your password must be at least 6 characters'
                    }]
            }}, {
            inline : true,
            on     : 'blur'
        });