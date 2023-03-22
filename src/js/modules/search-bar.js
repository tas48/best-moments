function searchBar(){
  const servicesTitle = document.querySelectorAll('.service-info > h2');
  const serviceCard = document.querySelectorAll('.service');
  let submitInput = document.querySelector('.search-bar');


  submitInput.addEventListener('keyup', () =>{
    
    servicesTitle.forEach(el => {
      if(el.innerText.toLowerCase() == submitInput.value.toLowerCase()){
        
      } 
      else {
        serviceCard.forEach(card => {
          card.style.display = "none";
        })
        
      }
    });

  });
  
  
  
    


  

}

export default searchBar;

