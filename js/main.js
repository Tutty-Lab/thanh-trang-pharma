// Đóng menu mobile sau khi chọn mục
document.querySelectorAll('.nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.querySelector('.header').classList.remove('open');
  });
});

// Các section ghim khi cuộn ([data-pin]): mỗi bước hiện thêm 1 số liệu và đổi 1 ảnh,
// đoạn cuối giữ nguyên trạng thái đầy đủ trước khi nhả ghim.
(function () {
  var mq = window.matchMedia('(max-width:900px), (prefers-reduced-motion: reduce)');
  var pins = Array.prototype.map.call(document.querySelectorAll('[data-pin]'), function (sec) {
    var items = sec.querySelectorAll('.statbar > div, .figures > .fig');
    sec.style.setProperty('--steps', items.length);
    return { sec: sec, items: items, imgs: sec.querySelectorAll('.stack-ph img'), last: -1 };
  });
  function update() {
    pins.forEach(function (p) {
      var n = p.items.length, step;
      if (mq.matches) { step = -1; }
      else {
        var r = p.sec.getBoundingClientRect();
        var prog = Math.min(1, Math.max(0, -r.top / (p.sec.offsetHeight - window.innerHeight)));
        step = Math.min(n - 1, Math.floor(prog * (n + 1)));
      }
      if (step === p.last) return;
      p.last = step;
      p.items.forEach(function (el, i) { el.classList.toggle('on', step < 0 || i <= step); });
      p.imgs.forEach(function (im, i) { im.classList.toggle('on', i === Math.max(step, 0)); });
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
