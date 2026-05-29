document.addEventListener('DOMContentLoaded', function(){
  // Hero 入場アニメーション
  const hero = document.querySelector('.hero-inner');
  if(hero){
    requestAnimationFrame(()=> hero.classList.add('is-visible'));
  }

  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); }
      }
    });
  });
});
