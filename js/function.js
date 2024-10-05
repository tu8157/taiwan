$(function() {
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
  