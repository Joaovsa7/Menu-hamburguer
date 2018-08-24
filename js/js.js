let botao = document.querySelector("#hamburger");

let lateral = document.querySelector("aside");

let body = document.querySelector("body");

let progresso = document.querySelector('#progresso');

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
   
body.onscroll = function(){

    let ScrollTotal = body.scrollHeight - innerHeight;
    let proporcao = scrollY / ScrollTotal;
    progresso.style.width = `${Math.floor(proporcao * 100)}%`;
}