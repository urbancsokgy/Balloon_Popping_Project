const balloon=document.querySelectorAll('.balloon');
// Random color 
function setBalloon(){
 
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  balloon.forEach(element => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor= "#" + randomColor;
  });
}; setBalloon();


(function bclick(){
  balloon.forEach(element => {
    element.addEventListener('click', (event) =>{
      element.classList.add('boom');
      element.innerHTML='<span>OOPs</span>';
      element.style.backgroundColor= 'white';
    })
  });
})();

