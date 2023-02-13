function currentYear(){
  const copyrightYear = document.getElementById('current-year');
  let date = new Date().getFullYear();
  copyrightYear.innerHTML = date;
}

export default currentYear;