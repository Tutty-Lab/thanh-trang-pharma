// Hero carousel: tự chuyển mỗi 6 giây, bấm tab để chuyển, dừng khi rê chuột
(function () {
  var root = document.querySelector('.hero-carousel');
  if (!root) return;
  var slides = root.querySelectorAll('.hc-slide');
  var tabs = root.querySelectorAll('.hc-tab');
  var DUR = 6000, cur = 0, timer = null, left = DUR, start = 0;
  root.style.setProperty('--dur', DUR + 'ms');
  function go(n) {
    cur = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle('on', i === cur); });
    tabs.forEach(function (t, i) {
      t.classList.remove('on'); t.classList.toggle('done', i < cur);
      void t.offsetWidth;
    });
    tabs[cur].classList.add('on');
    left = DUR; schedule();
  }
  function schedule() { clearTimeout(timer); start = Date.now(); timer = setTimeout(function () { go(cur + 1); }, left); }
  tabs.forEach(function (t) { t.addEventListener('click', function () { go(+t.dataset.go); }); });
  root.addEventListener('mouseenter', function () { clearTimeout(timer); left -= Date.now() - start; root.classList.add('paused'); });
  root.addEventListener('mouseleave', function () { root.classList.remove('paused'); schedule(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') go(cur + 1); else if (e.key === 'ArrowLeft') go(cur - 1);
  });
  go(0);
})();
