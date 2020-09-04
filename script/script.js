window.addEventListener('DOMContentLoaded', () => {

   // появляющаяся кнопка

   window.addEventListener('scroll', function () {
      const header = document.querySelector('.arrow__top'),
         banner = document.querySelector('.luxury'),
         height = banner.offsetHeight;

      function scroll() {
         if (window.pageYOffset > height) {
            header.classList.add('arrow__top_active');
         }
         else {
            header.classList.remove('arrow__top_active');
         }
      }
      scroll();
   })
})

$(document).ready(function () {

   // скролл

   $('a.anchor').click(function (e) {
      if ($(window).width() > 768) {
         e.preventDefault();
         var elClick = $(this).attr('href');
         var dest = $(elClick).offset().top;
         $('html:not(:animated),body:not(:animated)').animate({ scrollTop: dest }, 1000);
      }
   });
})