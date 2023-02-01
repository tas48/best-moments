function cardSlider(){
  const arrowPrev = document.getElementById('prev');
  const arrowNext = document.getElementById('nxt');
  const cards = document.querySelectorAll(".card-slider > div");
  let current = 0;
  

  arrowNext.addEventListener('click', () =>{
    current++;
    if(current >= 6){ current = 6;}
    console.log(current);

    for (var i of cards){
      if(current == 0){i.style.left = "0px";}
      if(current == 1){i.style.left = "-220px";}
      if(current == 2){i.style.left = "-440px";}
      if(current == 3){i.style.left = "-660px";}
      if(current == 4){i.style.left = "-880px";}
      if(current == 5){i.style.left = "-1100px";}
      if(current == 6){i.style.left = "-1320px";}
  
    }
  });

  arrowPrev.addEventListener('click', () =>{
    current--;
    if(current < 0){ current = 0;}
    console.log(current);

    for (var i of cards){
      if(current == 0){i.style.left = "0px"}
      if(current == 1){i.style.left = "-220px";}
      if(current == 2){i.style.left = "-440px";}
      if(current == 3){i.style.left = "-660px";}
      if(current == 4){i.style.left = "-880px";}
      if(current == 5){i.style.left = "-1100px";}
      if(current == 6){i.style.left = "-1320px";}
  
    }
  });
}

export default cardSlider;

