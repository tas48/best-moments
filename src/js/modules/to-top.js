function toTop(){
  const topButton = document.querySelector('.to-top');
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

export default toTop;