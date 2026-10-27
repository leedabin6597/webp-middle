console.log("script loaded;");

let button1 = false;
let button2 = false;
let button3 = false;
let button4 = false;
let button5 = false;
let button6 = false;
let button7 = false;
let button8 = false;

$(".img_1").on("click", function () {
  if (button1 == false) {
    $(".img_1").addClass("clicked");
    $(".group1").addClass("clicked");
    button1 = true;
  } else {
    $(".img_1").removeClass("clicked");
    $(".group1").removeClass("clicked");
    button1 = false;
  }
});

$(".img_2").on("click", function () {
  if (button2 == false) {
    $(".img_2").addClass("clicked");
    $(".group2").addClass("clicked");
    button2 = true;
  } else {
    $(".img_2").removeClass("clicked");
    $(".group2").removeClass("clicked");
    button2 = false;
  }
});

$(".img_3").on("click", function () {
  if (button3 == false) {
    $(".img_3").addClass("clicked");
    $(".group3").addClass("clicked");

    button3 = true;
  } else {
    $(".img_3").removeClass("clicked");
    $(".group3").removeClass("clicked");
    button3 = false;
  }
});

$(".img_4").on("click", function () {
  if (button4 == false) {
    $(".img_4").addClass("clicked");
    $(".group4").addClass("clicked");
    button4 = true;
  } else {
    $(".img_4").removeClass("clicked");
    $(".group4").removeClass("clicked");
    button4 = false;
  }
});

$(".img_5").on("click", function () {
  if (button5 == false) {
    $(".img_5").addClass("clicked");
    $(".group5").addClass("clicked");

    button5 = true;
  } else {
    $(".img_5").removeClass("clicked");
    $(".group5").removeClass("clicked");

    button5 = false;
  }
});

$(".img_6").on("click", function () {
  if (button6 == false) {
    $(".img_6").addClass("clicked");
    $(".group6").addClass("clicked");
    button6 = true;
  } else {
    $(".img_6").removeClass("clicked");
    $(".group6").removeClass("clicked");
    button6 = false;
  }
});

$(".img_7").on("click", function () {
  if (button7 == false) {
    $(".img_7").addClass("clicked");
    $(".group7").addClass("clicked");

    button7 = true;
  } else {
    $(".img_7").removeClass("clicked");
    $(".group7").removeClass("clicked");

    button7 = false;
  }
});

$(".img_8").on("click", function () {
  if (button8 == false) {
    $(".img_8").addClass("clicked");
    $(".group8").addClass("clicked");

    button8 = true;
  } else {
    $(".img_8").removeClass("clicked");
    $(".group8").removeClass("clicked");

    button8 = false;
  }
});
