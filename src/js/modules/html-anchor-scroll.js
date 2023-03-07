function anchorScroll(){
  const anchorLinks = document.querySelectorAll('a[href^="#');

  function getDistanceFromTop(el){
    const id = el.getAttribute('href');
    return section = document.querySelector(id).offsetTop;
  }

  function scroll(distance){
    window.scroll({
      top: distance
    });
  }
  
  function scrollToSection(event){
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target) - 100;
    console.log(distanceFromTop);
    scroll(distanceFromTop)
  }

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', scrollToSection)
    
  });


  

}

export default anchorScroll;
