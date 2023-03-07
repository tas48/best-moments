function anchorScroll(){
  const anchorLinks = document.querySelectorAll('a[href^="#');

  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 45);
}



  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', () =>{

      window.setTimeout(() => {
        
        if (location.hash.length !== 0) {
          window.scrollTo(window.scrollX, window.scrollY - 45);
        }

      }, 0);

    });
  });
  



}

export default anchorScroll;
