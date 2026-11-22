// Đóng menu mobile sau khi chọn mục
document.querySelectorAll('.nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.querySelector('.header').classList.remove('open');
  });
});
