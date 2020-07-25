function teste(input){
    alert(input.name);
}


function addEvento(){
    var caixas = document.querySelectorAll('.c ,.c1');    
    for(var i = 0; i < caixas.length; i++) {
        caixas[i].addEventListener('click', function(){
            teste(this);
        });
    }
}

window.addEventListener('load',addEvento);