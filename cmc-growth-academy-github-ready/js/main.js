/* =============================================
   Growth Academy — Main JS
   ============================================= */

function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(function (s) {
    s.classList.remove('visible');
  });
  document.querySelectorAll('.tab-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  var el = document.getElementById('s-' + id);
  if (el) el.classList.add('visible');
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleCard(card) {
  var detail = card.querySelector('.card-detail');
  if (!detail) return;
  var isOpen = detail.classList.contains('open');
  document.querySelectorAll('.card-detail.open').forEach(function (d) {
    d.classList.remove('open');
  });
  if (!isOpen) detail.classList.add('open');
}
