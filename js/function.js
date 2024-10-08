$(function () {
  // ここにjQueryを記述


});



window.addEventListener('load', function () {

  function setupImageSlider(containerClass, imgClass, interval = 6000) {
    const images = document.querySelectorAll(`.${containerClass} .${imgClass}`);
    let number = 0;

    function changeImage() {
      images[number].classList.remove('active');
      number = (number + 1) % images.length;
      images[number].classList.add('active');
    }

    // スライドショーを開始
    setInterval(changeImage, interval);
  }

  // mv1とmv2でスライドショーを初期化
  setupImageSlider('mv1', 'mv1__img');
  setupImageSlider('mv2', 'mv2__img');
});




function bodyFix() {
  const scrollPosi = window.scrollY;  // 現在のスクロール位置を取得
  document.documentElement.style.position = 'fixed';
  document.documentElement.style.width = '100%';
  document.documentElement.style.zIndex = '1';
  document.documentElement.style.top = `-${scrollPosi}px`;  // 負のスクロール位置を設定
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.zIndex = '1';
  document.body.style.top = `-${scrollPosi}px`;
}

function bodyFixReset() {
  const scrollPosi = parseInt(document.body.style.top || '0');  // 現在のスクロール位置を取得
  document.documentElement.style.position = 'relative';
  document.documentElement.style.width = 'auto';
  document.documentElement.style.top = 'auto';
  document.body.style.position = 'relative';
  document.body.style.width = 'auto';
  document.body.style.top = 'auto';
  
  window.scrollTo(0, -scrollPosi);  // スクロール位置を元に戻す
}


const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  const top = document.getElementById('btn__top');
  const bottom = document.getElementById('btn__bottom');
  const gnav = document.getElementById('gnav');
  
  top.classList.toggle('btnNav');
  bottom.classList.toggle('btnNav');
  gnav.classList.toggle('translateNav');
  if(gnav.classList.contains('translateNav') === true) {
    bodyFix()
  }else {
    bodyFixReset()
  }
});