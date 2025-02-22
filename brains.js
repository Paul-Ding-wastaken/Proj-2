window.addEventListener('scroll', function() {
    const img = document.getElementById("displaybg");
    img.style.top = `calc(${window.scrollY}px - 100vh)`;
  });