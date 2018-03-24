//1.  Declare a variable x and initialize it with an integer.

var x = 20;
console.log('Answer no 1: x = ' +20);



//2. How do you round the number 7.25, to the nearest integer?

console.log( "Answer no 2: " + Math.round( 7.25));

//3. Create an array called colors with the strings red, green and blue inside.

var color = ['red', 'green','blue'];
console.log("Answer no 3: "+ color);

//4. How can you find the length of the string you just created?

console.log("Answer no 4: " + color.length);

/* 5. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. */

let a = 29;
let b = 'Hello';

if (typeof a === typeof b) {
    console.log("Answer no 5: Same Type");
} else {
    console.log("Answer no 5: Not Same Type");   
}

/*6. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x? ( Here I use "X" because I already use "x" in no 1 question) */

var X = 7;
X %= 3;
console.log( "Answer no 6: " + X);

/* 7. Write a program to answer the following questions:

Can you store multiple types in an array? Numbers and strings?
*/

var film = ['Logan', 2017, ' Arrival', 2016, ' Tomb Rider', 2018];
console.log('Answer no 7a ' + film);





// Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?

if (6/0 === 10/0) {
    console.log('Answer no 7b: Those are infinities');
} else {
    console.log('Answer no 7b: Those are not infinities');
    
}


// Home Work FadeIn FadeOut effect in Jquery

$(document).ready(function () {
    $('.img-main').animate ({
        opacity:.5
    });
    $('.img-main').hover(function(){
        $(this).stop().animate({opacity:1},'fast');

    }, function (){
        $(this).stop().animate({opacity:.5},'slow');

    });   


});

$(document).ready(function(){

  $(".fadeOutFadeIn").css("display", "none");
  $("footer").css("display", "none");
  $(".subscribe").css("display","none");
  $(".myBtn").click(function(){
      $(".fadeOutFadeIn").fadeIn(3000),
      $("footer").fadeIn(3000),
      $(".subscribe").fadeIn(3000)
  });
  $(".myBtn").click(function (){
      $(".myBtn").fadeOut()
  });

  $(".emailSubmit").css("display","none");
    $(".clickHereButton").click( function (){
    $(".emailSubmit").fadeIn(3000)
    });
    $(".sendButton").click (function (){
        $(".subscribe").fadeOut(1000)
        $(".showText").text("Thank you for your subscription")
    });


});





