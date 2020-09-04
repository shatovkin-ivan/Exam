window.addEventListener('DOMContentLoaded', () => {

   // появляющаяся кнопка

   window.addEventListener('scroll', function () {
      const arrow = document.querySelector('.arrow__top'),
         banner = document.querySelector('.luxury'),
         header = document.querySelector('.header'),
         height = banner.offsetHeight + header.offsetHeight;

      function scroll() {
         if (window.pageYOffset > height) {
            arrow.classList.add('arrow__top_active');
         }
         else {
            arrow.classList.remove('arrow__top_active');
         }
      }
      scroll();
   })

   //    // выпадающие окна

   //    const links = document.querySelectorAll('.arrow'),
   //       dropdown = document.querySelectorAll('.filter__dropdown');

   //    links.forEach(item => {
   //       item.addEventListener('click', selectElement)
   //    });
   //    function selectElement() {
   //       dropdown.forEach(e => {
   //          e.preventDefault();
   //          this.classList.toggle('filter__dropdown_active');
   //          this.classList.toggle('arrow_active');
   //       })
   //    }
   // })

   $(document).ready(function () {

      $('.filter__descr').on('click', function (event) {
         event.preventDefault();
         $(this).parents('.filter__item').find('.filter__dropdown').slideToggle();
         $(this).parents('.filter__item').find('.arrow').toggleClass('arrow_active');
         if ($(window).width() < 1280) {
            $(this).parents('.filter__item').find('.arrow').toggleClass('arrow_active');
         }
      });

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
})