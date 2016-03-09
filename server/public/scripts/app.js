var aesopFoods = ["Apples", "Pears", "Bananas", "Pizza"];
var currentRequest;
var correct = 0;
var incorrect = 0;

$(document).ready(function(){
  $(".apples").on("click", applesFunk);
  $(".pears").on("click", pearsFunk);
  $(".bananas").on("click", bananasFunk);
  $(".pizza").on("click", pizzaFunk);
});

var timer = setInterval(aesopWantsFood, 5000);

function applesFunk(){
  $.ajax({
      type: "GET",
      url: "/data/apples",
      success: function(data){
        feedAesopFood("Apples");
      }
  });
}

function pearsFunk(){
  $.ajax({
      type: "GET",
      url: "/data/pears",
      success: function(data){
        feedAesopFood("Pears");
      }
  });
}

function bananasFunk(){
  $.ajax({
      type: "GET",
      url: "/data/bananas",
      success: function(data){
        feedAesopFood("Bananas");
      }
  });
}

function pizzaFunk(){
  $.ajax({
      type: "GET",
      url: "/data/pizza",
      success: function(data){
        feedAesopFood("Pizza");
      }
  });
}

function aesopWantsFood(){
  currentRequest = aesopFoods[randomNumber(0, aesopFoods.length - 1)];
  $(".aesop").text("Aesop wants " + currentRequest + "!");
  console.log(currentRequest);
}

function feedAesopFood(food){
  if(food == currentRequest){
    console.log("Correct!");
    correct++;
    $(".correct").text("Aesop was fed correctly " + correct + " times!");
  } else {
    console.log("Incorrect!");
    incorrect++;
    $(".incorrect").text("Aesop was fed incorrectly " + incorrect + " times! Aesop marches towards doom!");
  }

  aesopWantsFood();
  clearInterval(timer);
  timer = setInterval(aesopWantsFood, 5000);
}

var randomNumber = function(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
