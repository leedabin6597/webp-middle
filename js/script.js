console.log("complete");
console.log($(window).width());
console.log($(window).height());

let width = $(window).width();
let height = $(window).height();

//고양이랑 풀숲 배경 조정해보기
$(document).on("mousemove", function (event) {
  console.log(event);

  let mouseX = event.pageX;
  let mouseY = event.pageY;

  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  let imgwidth = $(".cat-img").width();
  let imgheight = $(".cat-img").height();

  $(".cat-img").css("left", mouseX - imgwidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgheight / 2 + "px");
});
// console.log(width);
// console.log(height);

// //mousemove 이벤트가 일어날때마다
// //mouse커서의 x,y값을 구해서 사용할 수 있음
$(document).mousemove(function (e) {
  $("#status").html(e.pageX + "," + e.pageY);
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});
