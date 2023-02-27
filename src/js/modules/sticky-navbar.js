function stickyNavbar(){
  const navbar = document.querySelector("header");
  let sticky = navbar.offsetTop;

  window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      
    } else {
      navbar.classList.remove("sticky");
    }
  }
}

export default stickyNavbar;