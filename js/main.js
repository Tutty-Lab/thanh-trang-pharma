// Đóng menu mobile sau khi chọn mục
document.querySelectorAll('.nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.querySelector('.header').classList.remove('open');
  });
});

// Section "Về Thanh Trang": ghim khi cuộn, mỗi bước bật 1 số liệu và đổi 1 ảnh
(function () {
  var sec = document.querySelector('.about-scroll');
  if (!sec) return;
  var imgs = sec.querySelectorAll('.stack-ph img');
  var stats = sec.querySelectorAll('.statbar > div');
  var bar = sec.querySelector('.statbar');
  var steps = stats.length;
  sec.style.setProperty('--steps', steps);
  var mq = window.matchMedia('(max-width:900px), (prefers-reduced-motion: reduce)');
  var last = -1;
  function update() {
    if (mq.matches) {
      stats.forEach(function (s) { s.classList.add('on'); });
      imgs.forEach(function (im, i) { im.classList.toggle('on', i === 0); });
      last = -1;
      return;
    }
    var r = sec.getBoundingClientRect();
    var total = sec.offsetHeight - window.innerHeight;
    var p = Math.min(1, Math.max(0, -r.top / total));
    // Chia thành steps+1 đoạn: đoạn cuối giữ nguyên trạng thái đủ 4 số liệu trước khi nhả ghim
    var step = Math.min(steps - 1, Math.floor(p * (steps + 1)));
    bar.style.setProperty('--p', p);
    if (step === last) return;
    last = step;
    stats.forEach(function (s, i) { s.classList.toggle('on', i <= step); });
    imgs.forEach(function (im, i) { im.classList.toggle('on', i === step); });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
