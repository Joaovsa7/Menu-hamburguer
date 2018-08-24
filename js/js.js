let botao = document.querySelector("#hamburger");

let lateral = document.querySelector("aside");

let barraVisivel = false;

botao.onclick = function () {
    
        lateral.classList.toggle('mostrando');
        for(item of lateral.children){
            if  (item.id !== "hamburguer"){
                item.classlist.toggle('invisivel');
            }   
            
    } 


}
   