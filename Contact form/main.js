

$('#msg-fname').hide();
$('#msg-lName').hide();
$('#msg-email').hide();
$('#msg-subject').hide();
$('#msg-textarea').hide();


var error_fname = false;
var error_lname = false;
var error_email = false;
var error_subject = false;
var error_textarea = false;



$('#fname').focusout(function(){
    check_fname();
});

function check_fname (){
    var pattern = /^[a-zA-Z]*$/;
    var fnameValue = $('#fname').val();
    if (pattern.test(fnameValue) && fnameValue !== '' ){
        $('#msg-fname').html('Valid name');
        $('#msg-fname').css('color', 'green');
    } 
    else {
        $('#msg-fname').html('Please enter your first name');
        $('#msg-fname').show();
        $('#msg-fname').css('color', 'red');
        error_fname = true;
    }
    if (! pattern.test(fnameValue)) {
        $('#msg-fname').html('No digits please!');
        $('#msg-fname').css('color','red');
    }
}

$('#lName').focusout(function(){
    check_lName();
});

function check_lName (){
    var pattern = /^[a-zA-Z]*$/;
    var lnameValue = $('#lName').val();
    if (pattern.test(lnameValue) && lnameValue !== '' ){
        $('#msg-lName').html('Valid name');
        $('#msg-lName').css('color', 'green');
    } 
    else {
        $('#msg-lName').html('Please enter your last name');
        $('#msg-lName').show();
        $('#msg-lName').css('color', 'red');
        error_lname = true;
    }
    if (! pattern.test(lnameValue)) {
        $('#msg-lName').html('No digits please!');
    }
}


$('#email').focusout(function(){
    checkEmail();
});

function checkEmail (){
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailValue = $('#email').val();
    if (pattern.test(emailValue) && emailValue !== '' ) {
        $('#msg-email').html('Email is valid');
        $('#msg-email').css('color', 'green');
    } else {
        $('#msg-email').html('Please enter a valid email');
        $('#msg-email').show();
        $('#msg-email').css('color', 'red');
        error_email = true;
    }
}


$('#subject').focusout(function(){
    checkSubject();
});
function checkSubject (){
    var subjectValue = $('#subject').val();
    if (subjectValue.length >= 2) {
        $('#msg-subject').html('Subject is valid');
        $('#msg-subject').css('color', 'green');
    } else {
        $('#msg-subject').html('Please enter at least 2 character');
        $('#msg-subject').show();
        $('#msg-subject').css('color', 'red');
        error_subject = true;
    }
}

$('#message').focusout(function(){
    checkMessage();
});
function checkMessage (){
    var subjectValue = $('#message').val();
    if (subjectValue.length >= 10) {
        $('#msg-textarea').html('Message is valid');
        $('#msg-subject').css('color', 'green');
    } else {
        $('#msg-textarea').html('Please enter 10 characters or more');
        $('#msg-textarea').show();
        $('#msg-textarea').css('color', 'red');
        error_subject = true;
    }
}


$('button').click (function (event){
    error_fname = false;
    error_lname = false;
    error_email = false;
    error_subject = false;
    error_textarea = false;

    check_fname();
    check_lName()
    checkEmail();
    checkSubject();
    checkMessage();
    
    if ( error_email === false && error_subject === false && error_fname === false && error_lname === false && error_textarea === false ) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
})









