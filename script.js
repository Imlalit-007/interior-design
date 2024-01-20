  //Sidebar

  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.querySelector('body').style.overflow = "hidden";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('body').style.overflow = "auto";
  }


  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
    loop: true,
  });