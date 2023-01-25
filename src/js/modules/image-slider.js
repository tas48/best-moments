function autoSlider(){
  let count = 1;
  document.getElementById( 'radio1').checked = true;

  setInterval(() => {

    count++;
    if (count>4) count = 1;
    document.getElementById('radio'+count).checked = true;

  }, 6000);
}

export default autoSlider;