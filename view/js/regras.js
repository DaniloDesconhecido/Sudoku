//Comparando os valores da grade da celula alterada
function grades(celulas,celu,array){    
    var celula = document.querySelectorAll("."+celulas);

    for(var i = 0; i < celula.length; i++){
        for(var u = 0; u < celula.length; u++){

            if(celula[i].value >= 1 && celula[i].value <= 9){                
                    if(celula[i].value == celula[u].value){
                        if(celula[i].id != celula[u].id){
                        celula[i].style.color="#ff0000";
                        break;
                        }
                    }
                    if(celula[i].value != celula[u].value ||
                        celula[i].id != celula[u].id){
                            if(array.indexOf(celula[i].id) == -1){
                                celu.style.color="#000000";                                
                            }
                    }
            }else{break;}
        }
    }
}


function TodasLinhaColuna(){
    var celulas = document.querySelectorAll('.c');
    var id = null;    
    var array = [];

    for(var c = 0; c < celulas.length; c++){
               
        id = celulas[c].id;

        if(celulas[c].value >= 1 && celulas[c].value <= 9){

            for(var l = 1; l <= 9; l++){

                if(document.getElementById('c'+id[1]+l).value == celulas[c].value){                        
                    if(document.getElementById('c'+id[1]+l).id != id){
                        celulas[c].style.color="#ff0000";                        
                        break;
                    }
                }
                if(document.getElementById('c'+id[1]+l).value != celulas[c].value || 
                document.getElementById('c'+id[1]+l).id == id){
                    if(l-1 == 8){

                        for(var co = 1; co <= 9; co++){

                            if(document.getElementById('c'+co+id[2]).value == celulas[c].value){
                                if(document.getElementById('c'+co+id[2]).id != id){
                                    celulas[c].style.color="#ff0000";
                                    array.push(celulas[c].id);
                                    break;
                                }
                            }else{
                                grades(celulas[c].className.split(" ")[0],celulas[c],array);                                        
                            }
                        }
                    }
                }                
            }
        }
    }
}

window.addEventListener('load',addEvento);