$(function () {
  // スクロール時の制御
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // ヘッダー
      $(".header").addClass("header--active");
      // トップへ戻るボタン
      $(".btn-go-top").fadeIn(500);
    } else {
      $(".header").removeClass("header--active");
      $(".btn-go-top").fadeOut(500);
    }
  });

  //料金の横スクロール
  $(".price-list").scroll(function () {
    const el = $(this).scrollLeft();
    if (el > 30) {
      $(".price-list__scroll").fadeOut();
    }
  });

  //FAQのスライド
  $(".faq__item--q").click(function () {
    $(this).next(".faq__item--a").slideToggle(200);
    $(this).toggleClass("is-open");
  });
  //Swiperの初期化
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ------------------------------
  // タイトルが横から表示されるアニメーション
  // ------------------------------
  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime() {
    // 背景色が伸びて出現（左から右）
    $(".bgLRextendTrigger").each(function () {
      //bgLRextendTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("bgLRextend"); // 画面内に入ったらbgLRextendというクラス名を追記
      } else {
        $(this).removeClass("bgLRextend"); // 画面外に出たらbgLRextendというクラス名を外す
      }
    });

    // 文字列を囲う子要素
    $(".bgappearTrigger").each(function () {
      //bgappearTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("bgappear"); // 画面内に入ったらbgappearというクラス名を追記
      } else {
        $(this).removeClass("bgappear"); // 画面外に出たらbgappearというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  // ------------------------------
});
