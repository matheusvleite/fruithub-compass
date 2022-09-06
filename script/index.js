// RELOAD
 (function Reload() {
    window.addEventListener('load', function(){
        setTimeout(() =>{
           document.getElementById('loader').style.display = 'none';
        },3000)
     })
 }())

 // AUTHENTICATION PAGE

 (function inputStart(){
   const input = document.getElementById('name');
   const button = document.getElementById('btn-start');

   button.addEventListener('click' , function() {
      if(!input.value){
         const error = document.getElementById('error');
         error.innerHTML = "Please confirm your name";
      }else {
      // If you use remeber remove /fruithub-compass/
         window.location.replace("/fruithub-compass/pages/home.html");
         localStorage.setItem('user' , input.value);
      }   
   })
 }())





 
