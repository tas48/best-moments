function renderMenu(){
  const mobileMenu = document.querySelector('.mobile-menu');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li');
  let activeClass = 'active';
  
  if(mobileMenu){
    mobileMenu.addEventListener('click', () => {
      navList.classList.toggle(activeClass);
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = "";
        }
        else{
          link.style.animation = `navLinkFade 0.5 ease forwards ${index/3 + 1}s`;    
        }
      });
    });
  }
  else{
    console.log('Erro!');
  }
}
export default renderMenu;