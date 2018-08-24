let botao = document.querySelector("#hamburger");

let lateral = document.querySelector("aside");


botao.onclick = function () {

        lateral.classList.toggle('mostrando');
        for(item of lateral.children){
            if  (item.id !== "hamburguer"){
                item.classlist.toggle('invisivel');
            }   
            
    } 

        for(item of botao.children) {
            item.classlist.toggle('mostrando');
        }

}
   