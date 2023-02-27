function currentPage(){
  let path = document.location.pathname;
  const menuLink = document.querySelectorAll('.link');
  
  if(path.endsWith('index.html')){
    menuLink[0].classList.add('current-page');

  }
  else if(path.endsWith('about.html')){
    menuLink[1].classList.add('current-page');
  }
  else if(path.endsWith('services.html')){
    menuLink[3].classList.add('current-page');
  }
  else if(path.endsWith('sponsors.html')){
    menuLink[4].classList.add('current-page');
  }  
}

export default currentPage;