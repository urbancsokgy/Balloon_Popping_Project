const balloon=document.querySelectorAll('.balloon');

(function bclick(){
  balloon.forEach(element => {
    element.addEventListener('click', (event) =>{
      console.log('hello');
      element.classList.add('boom');
    })
  });
})();