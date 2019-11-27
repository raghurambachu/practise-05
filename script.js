const openButton = document.querySelector(".nav-open");

let navlist = document.querySelector('.nav-list');

let nav = document.querySelector(".nav")

let toggle=true;


openButton.addEventListener("click",() => {

   if(toggle){

        nav.setAttribute('style',"display:initial");
        navlist.classList.add('opening-nav-nav-list');
        nav.classList.add('opening-nav');
       

   }else{

        nav.setAttribute('style','display:none');
       

   }    
    
    

    if(toggle == true)
        toggle=false;
    else
        toggle=true

});