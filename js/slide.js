$(function () {
  /**
   *1. 변수선언
   */
  var visualWrap = $("#mainVisual"),
    slide = visualWrap.find(".visual_slide>li"),
    slideCount = slide.length,
    stopTimer,
    stopBtn = visualWrap.find(".btnImg > .play"),
    stopBtn = visualWrap.find(".btnImg > .stop"),
    leftBtn = visualWrap.find(".btnImg > .prev"),
    rightBtn = visualWrap.find(".btnImg > .next"),
    pager = visualWrap.find(".buttonList > li"),
    current = 0,
    isStop = false;
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
      cnt(current);
    }, 3000);
  }

  /**
   * 슬라이드 애니메이트
   */
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000);
  }

  /**
   * 재생, 일시정지 버튼 UI
   */
  stopBtn.click(function () {
    if (!isStop) {
      // $(this).text("go play");
      $(this).css("background", "url(img/play.png)");
      clearInterval(stopTimer);
      isStop = true;
    } else {
      // $(this).text("go stop");
      $(this).css("background", "url(img/stop.png)");
      timer();
      isStop = false;
    }
  });

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
   * 카운터 동적생성
   */
  var counterEl = "<span class='counter'>1";
  $("#mainVisual").append(counterEl);
  var counter = $(".counter");
  function cnt(n) {
    counter.html(n + 1);
  }
}); //jQuery
