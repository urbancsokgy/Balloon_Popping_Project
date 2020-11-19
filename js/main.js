const balloon=document.querySelectorAll('.balloon');
// Random color 
function setBalloon(){
 
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  balloon.forEach(element => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor= "#" + randomColor;
  });
}; setBalloon();
//eseményfigyelő

function bclick(){
   balloon.forEach(element => {
    element.addEventListener('mouseenter', (event) =>{
      element.classList.add('boom');
      element.innerHTML='<span>OOPs</span>';
      element.style.backgroundColor= 'white';
      event.target.removeEventListener('mouseenter',()=>{} );
      
      })
    })
  };
bclick();
