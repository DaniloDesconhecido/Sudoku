//Comparando os valores da grade da celula alterada
function grades(celulas,input){    
    var celula = document.querySelectorAll("."+celulas);   
    
    input.select();
    for(var i = 0; i < celula.length; i++){        
        for(var u = 0; u < celula.length; u++){
            if(celula[i].value >= 1 && celula[i].value <= 9){                
                if(celula[i].id != celula[u].id){
                    if(celula[i].value == celula[u].value){
                        celula[i].style.color="#ff0000";                        
                        break;                    
                    }
                }
            }else{
                break;
            }
        }
    }    
    TodasLinhaColuna();    
}
//console.log(id +" l " + id[1] + " c " + id[2]);
function TodasLinhaColuna(){
    var celulas = document.querySelectorAll('.c');
    var id = null;
    var repetido = false;
    for(var c = 0; c <= 1; c++){        
        id = celulas[c].id;   
        if(celulas[c].value >= 1 && celulas[c].value <= 9){     
        for(var l = 1; l <= 9; l++){
            console.log(document.getElementById('c'+id[1]+l).id);
            if(document.getElementById('c'+id[1]+l).id != id){
                if(document.getElementById('c'+id[1]+l).value == celulas[c].value){
                    celulas[c].style.color="#ff0000";
                    repetido = true;
                }
            }
        }
        for(var co = 1; co <= 9; co++){
            console.log(document.getElementById('c'+co+id[2]).id);
            if(document.getElementById('c'+co+id[2]).id != id){
                if(document.getElementById('c'+co+id[2]).value == celulas[c].value){
                    celulas[c].style.color="#ff0000";
                    repetido = true;
                }
            }
        }
        if(repetido == false){
            if(array.indexOf(celulas[c].id) === -1){
            celulas[c].style.color="#000000";
            }
        }
        }
        
    }
}

function regras(){
    
}

//Identificando a grande do input
function addEvento(){
    var caixas = document.querySelectorAll('.c');    
    for(var i = 0; i < caixas.length; i++){
        caixas[i].addEventListener('input', function(){
            this.value = this.value.replace(/\D/g, '');
    this.value = this.value.substring(0,1);
            grades(this.className.split(" ")[0],this);            
        });        
    }
}

window.addEventListener('load',addEvento);