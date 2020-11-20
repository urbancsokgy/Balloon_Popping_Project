const balloon=document.querySelectorAll('.balloon');
const wrap=document.querySelector('.wrap');
const content=document.querySelector('.content');

let counter=0;
// Random color 
function setBalloon(){
 
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  balloon.forEach(element => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor= "#" + randomColor;
  });
}; setBalloon();
//eseményfigyelő

(function mouseenter(){
   balloon.forEach(element => {
    element.addEventListener('mouseenter', (event) =>{
      if(!element.classList.contains('boom')){
      counter++;}
      element.classList.add('boom');
      element.innerHTML='<span>OOPs</span>';
      element.style.backgroundColor= 'white';
     if (counter==25){
      wrap.style.display='none';
      content.innerHTML='<h1 class="title">Minden lufi kipukkadt!</h1>';
     }
    
      
      } );
    })
  })();
 
  