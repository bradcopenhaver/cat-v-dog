var catIcon = function() {//adds a small cat to screen when clicked
  $("ul#smallCats").after("<img src='img/catsmall.png' class='icon'>");
  $(".icon").click(function(){
    $(this).remove();
});
};
var dogIcon = function(){//adds a small dog to screen when clicked
  $("ul#smallDogs").after("<img src='img/dogsmall.png' class='icon'>");
  $(".icon").click(function(){
    $(this).remove();
    });
};

$(document).ready(function() {
  $("button#meow").click(function() {
    $("img").remove();//clears img 'buffer'
    $("ul#callout").prepend("<li>Meeoww!</li>");
    $("ul#reply").prepend("<li>Woof woof!!</li>");
    $("ul#callout").before("<img src='img/cat.png' id='kitty'>");
    $("ul#reply").before("<img src='img/dog.jpg' id='puppy'>");

    $("img#kitty").click(function(){
      catIcon();
    });
    $("img#puppy").click(function(){
      dogIcon();
    });
    $("ul#callout").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#reply").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("img").remove();//clear img 'buffer'
    $("ul#callout").prepend("<li>Woof!</li>");
    $("ul#reply").prepend("<li>Meow-ow!</li>");
    $("ul#callout").before("<img src='img/dog.jpg' id='puppy'>");
    $("ul#reply").before("<img src='img/cat.png'id='kitty'>");

    $("img#kitty").click(function(){
      catIcon();
    });
    $("img#puppy").click(function(){
      dogIcon();
    });
    $("ul#callout").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#reply").children("li").first().click(function(){
      $(this).remove();
    });
  });
});
