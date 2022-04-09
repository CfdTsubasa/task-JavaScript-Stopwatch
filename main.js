let decisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

$(".stop").prop("disabled",true).css("opacity",0.9);
$(".reset").prop("disabled",true).css("opacity",0.9);

$(".start").click(function(){
  timer = setInterval(countUp,100);
  $(".start").prop("disabled",true).css("opacity",0.9);
  $(".stop").prop("disabled",false).css("opacity",1.0);
  $(".reset").prop("disabled",false).css("opacity",1.0);
})

$(".stop").click(function(){
  clearInterval(timer);
  $(".start").prop("disabled",false).css("opacity",1.0);
  $(".stop").prop("disabled",true).css("opacity",0.9);
})

$(".reset").click(function(){
  clearInterval(timer);
  $("span").text("0");
  $(".start").prop("disabled",false).css("opacity",1.0);
  $(".stop").prop("disabled",true).css("opacity",0.9);
  $(".reset").prop("disabled",true).css("opacity",0.9);
  decisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
})

function countUp(){

  decisecond += 1;

  if(decisecond > 9){
    decisecond = 0;
    second += 1;
  }

  if(second > 59){
    second = 0;
    minute += 1;
  }

  if(minute > 59){
    minute = 0;
    hour += 1;
  }

  $(".hour").text(hour);
  $(".second").text(second);
  $(".minute").text(minute);
  $(".decisecond").text(decisecond);
}