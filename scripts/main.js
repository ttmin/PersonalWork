/*--------------------------------------
ヘッダー出現
---------------------------------------*/
/* const header = document.querySelector('header');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('appear-header');
      //observer.unobserve(entry.target);
    } else {
      //entry.target.classList.remove('appear-header');
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1
};

const io = new IntersectionObserver(cb, options);
io.observe(header); */

/*--------------------------------------
メニューナビゲーションのリンク作成
---------------------------------------*/
const list = document.getElementsByClassName('list');
for (let i = 0; i < list.length; i++) {
　　list[i].addEventListener('click', function () {
　　　　hamburger();
    });
}

const link = document.getElementsByClassName('link');
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function () {
　　　　hamburger();
    });
}


/*--------------------------------------
画面内に入ったときのアニメーション(ABOUT以降)
---------------------------------------*/
const inview = document.querySelectorAll('.inview');
const cb2 = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('inview');
    }
  });
}
const io2 = new IntersectionObserver(cb2);
inview.forEach(el => io2.observe(el));

/*--------------------------------------
メニュー表示
---------------------------------------*/
document.getElementById("menu").style.visibility = "hidden";
document.getElementById("menu").style.opacity = 0;
function hamburger(){
	const menu = document.getElementById("menu");

	if(menu.style.visibility=="visible" && menu.style.opacity==1){
		// hiddenで非表示
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
	} else {
		// visibleで表示
    menu.style.visibility ="visible";
    menu.style.opacity = 1;
	}
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );


/*--------------------------------------
メニュー非表示
---------------------------------------*/
function hamburgerClose(){
	const menu = document.getElementById("menu");

	if(menu.style.visibility=="hidden" && menu.style.opacity==0){
		// hiddenで非表示
    menu.style.visibility = "visible";
    menu.style.opacity = 1;
	} else {
		// visibleで表示
    menu.style.visibility ="hidden";
    menu.style.opacity = 0;
	}
}
document.getElementById('hamburger-close').addEventListener('click' , function () {
  hamburgerClose();
} );

/*--------------------------------------
オーバーレイ表示
---------------------------------------*/
document.getElementById("overlay").style.visibility = "hidden";
document.getElementById("overlay").style.opacity = 0;
function productPop() {
	const overlay = document.getElementById("overlay");

	if(overlay.style.visibility=="visible" && overlay.style.opacity==1){
		// hiddenで非表示
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
	} else {
		// visibleで表示
    overlay.style.visibility ="visible";
    overlay.style.opacity = 1;
	}
}
document.getElementById('product-pop').addEventListener('click' , function () {
  productPop();
} );

/*--------------------------------------
オーバーレイ非表示
---------------------------------------*/
function productPopClose() {
	const overlay = document.getElementById("overlay");

	if(overlay.style.visibility=="hidden" && overlay.style.opacity==0){
		// hiddenで非表示
    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
	} else {
		// visibleで表示
    overlay.style.visibility ="hidden";
    overlay.style.opacity = 0;
	}
}
document.getElementById('product-pop-close').addEventListener('click' , function () {
  productPopClose();
} );



//product写真スワイプ
var swiper = new Swiper('.overlay-inner', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});