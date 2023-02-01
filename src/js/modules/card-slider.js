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
      if(current == 1){i.style.left = "-199px";}
      if(current == 2){i.style.left = "-398px";}
      if(current == 3){i.style.left = "-597px";}
      if(current == 4){i.style.left = "-796px";}
      if(current == 5){i.style.left = "-995px";}
      if(current == 6){i.style.left = "-1194px";}
  
    }
  });

  arrowPrev.addEventListener('click', () =>{
    current--;
    if(current < 0){ current = 0;}
    console.log(current);

    for (let i of cards){
      if(current == 0){i.style.left = "0px";}
      if(current == 1){i.style.left = "-199px";}
      if(current == 2){i.style.left = "-398px";}
      if(current == 3){i.style.left = "-597px";}
      if(current == 4){i.style.left = "-796px";}
      if(current == 5){i.style.left = "-995px";}
      if(current == 6){i.style.left = "-1194px";}
  
    }
  });
}

export default cardSlider;

