function searchBar(){
  const servicesList = document.querySelectorAll('.service-info > h2');
  let submitInput = document.querySelector('.search-bar');
  // searchInput = searchInput.toLowerCase();

  submitInput.addEventListener('click', () => {
    searchInput.value = searchInput.value;
    
    servicesList.forEach(element => {
      if(element.innerHTML.toLowerCase().includes(searchInput)){
      console.log('asd'); 
    }

    });
  });



}

export default searchBar;

function returnN(){
  return 1+1;
}