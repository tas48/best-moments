function toTop(){
  const topButton = document.querySelector('.to-top');
  
  topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

export default toTop;