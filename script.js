
// Simple active nav highlighter
(function(){
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const url = new URL(href, location.origin);
    if (url.pathname === path || (path === '/' && url.pathname.endsWith('/index.html'))) {
      a.classList.add('active');
    }
  });
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
