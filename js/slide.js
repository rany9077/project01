$(function () {
  /**
   *1. 변수선언
   */
  var visualWrap = $("#mainVisual"),
    slide = visualWrap.find(".visual_slide>li"),
    slideCount = slide.length,
    stopTimer,
    leftBtn = visualWrap.find(".btnImg > .prev"),
    rightBtn = visualWrap.find(".btnImg > .next"),
    pager = visualWrap.find(".buttonList > li"),
    current = 0;

  /**
   슬라이드 위치 설정
   */
  var slidePos = slide.each(function (i) {
    $(this).css("left", i * 100 + "%");
  });

  /**
   * 슬라이드 이미지부분 - setinterval
   * 슬라이드 인덱스 번호를 반환
   */
  timer();

  /**
   * autoplay 함수
   */
  function timer() {
    stopTimer = setInterval(function () {
      var prev = slide.eq(current); //0
      move(prev, 0, "-100%");
      var prevPager = pager.eq(current);
      prevPager.removeClass("on");
      current++; //1
      if (current == slideCount) {
        current = 0;
      }
      var next = slide.eq(current); //1
      move(next, "100%", "0%");
      var nextPager = pager.eq(current);
      nextPager.addClass("on");
    }, 3000);
  }

  /**
   * 슬라이드 애니메이트
   */
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000);
  }

  /**
   * 좌우 버튼 UI
   */
  rightBtn.click(function () {
    var prev = slide.eq(current); //0
    move(prev, 0, "-100%");
    var prevPager = pager.eq(current);
    prevPager.removeClass("on");

    current++; //1
    if (current == slideCount) {
      current = 0;
    }
    var next = slide.eq(current); //1
    move(next, "100%", "0%");
    var nextPager = pager.aq(current);
    nextPager.addClass("on");
  });

  leftBtn.click(function () {
    var prev = slide.eq(current); //0
    move(prev, 0, "100%"); //slide.eq(0),0,100%
    var prevPager = pager.eq(current);
    prevPager.removeClass("on");

    current--; //1
    if (current < 0) {
      current = slideCount - 1;
    }
    var next = slide.eq(current); //1
    move(next, "-100%", "0%");
    var nextPager = pager.eq(current);
    nextPager.removeClass("on");
  });

  /**
   * 페이저 UI
   */
  pager.click(function () {
    var tg = $(this);
    var i = tg.index();
    pager.removeClass("on");
    tg.addClass("on");
    pagerMove(i);
  });

  function pagerMove(i) {
    if (current == i) return;
    var currentEl = slide.eq(current);
    var nextEl = slide.eq(i);
    currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
    nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
    current = i;
  }
}); //jQuery
