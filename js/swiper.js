/* swiper slide side-bar*/
var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicbullests: true,
      clickable: true,

    },
    autoplay:{
       delay:2500,
    },
    loop:true,
  });
  /*swiper slide sale -slide*/

  var swiper = new Swiper(".sale_sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicbullests: true,
      clickable: true,

    },
    slidesPerView:5,
    spaceBetween:30,
    autoplay:{
       delay:3000,
    },
    loop:true,
  });