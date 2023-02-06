function cardSlider(){
  const arrowPrev = document.getElementById('prev');
  const arrowNext = document.getElementById('nxt');
  const cards = document.querySelectorAll(".card-slider > div");
  let current = 0;
  

  arrowNext.addEventListener('click', () =>{
    current++;
    console.log(current);
    if(current >= 4){ current = 4;}
    for (let i of cards){
      if(current == 0){i.style.left = "0%";}
      if(current == 1){i.style.left = "-25%";}
      if(current == 2){i.style.left = "-50%";}
      if(current == 3){i.style.left = "-75%";}
      if(current == 4){i.style.left = "-100%";}
    }
  });

  arrowPrev.addEventListener('click', () =>{
    current--;
    if(current < 0){ current = 0;}
    console.log(current);

    for (let i of cards){
      if(current == 0){i.style.left = "0%";}
      if(current == 1){i.style.left = "-25%";}
      if(current == 2){i.style.left = "-50%";}
      if(current == 3){i.style.left = "-75%";}
      if(current == 4){i.style.left = "-100%";}
    }
  });
}

export default cardSlider;

