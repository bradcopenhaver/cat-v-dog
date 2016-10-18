$(document).ready(function() {
  $("button#meow").click(function() {
    $("img").remove();
    $("ul#callout").prepend("<li>Meeoww!</li>");
    $("ul#reply").prepend("<li>Woof woof!!</li>");
    $("ul#callout").before("<img src='img/cat.png' id='kitty'>");
    $("ul#reply").before("<img src='img/dog.jpg' id='puppy'>");

    $("img#kitty").click(function(){
      $("img#kitty").after("<img src='img/catsmall.png' class='icon'>");
      $(".icon").click(function(){
        $(this).remove();
        });
    });
    $("img#puppy").click(function(){
      $("img#puppy").after("<img src='img/dogsmall.png' class='icon'>");
      $(".icon").click(function(){
        $(this).remove();
        });
    });


  });

  $("button#woof").click(function() {
    $("img").remove();
    $("ul#callout").prepend("<li>Woof!</li>");
    $("ul#reply").prepend("<li>Meow-ow!</li>");
    $("ul#callout").before("<img src='img/dog.jpg' id='puppy'>");
    $("ul#reply").before("<img src='img/cat.png'id='kitty'>");

    $("img#kitty").click(function(){
      $("img#kitty").after("<img src='img/catsmall.png' class='icon'>");
      $(".icon").click(function(){
        $(this).remove();
        });
    });
    $("img#puppy").click(function(){
      $("img#puppy").after("<img src='img/dogsmall.png' class='icon'>");
      $(".icon").click(function(){
        $(this).remove();
        });
    });
    });



});
