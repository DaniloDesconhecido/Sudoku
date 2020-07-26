//Comparando os valores da grade da celula alterada
function grades(celulas,celu,array){    
    var celula = document.querySelectorAll("."+celulas);   
    var repeti;
    

    for(var i = 0; i < celula.length; i++){ 
        repeti = false;       
        for(var u = 0; u < celula.length; u++){
            if(celula[i].value >= 1 && celula[i].value <= 9){               
                
                    if(celula[i].value == celula[u].value){
                        if(celula[i].id != celula[u].id){
                        celula[i].style.color="#ff0000"; 
                        repeti == true;                       
                        break;    
                        }                
                    }if(celula[i].value != celula[u].value || celula[i].id != celula[u].id){        
                        
                            if(array.indexOf(celula[i].id) == -1){
                            celu.style.color="#000000"; 
                                
                            }
                        
                    }
                
            }else{
                break;
            }            
        }
    }    
    //TodasLinhaColuna(array);    
}
//console.log(id +" l " + id[1] + " c " + id[2]);
function TodasLinhaColuna(celula){
    var celulas = document.querySelectorAll('.c');
    var id = null;
    var passar = false;
    var array = [];

    for(var c = 0; c < celulas.length; c++){ 
        passar = false;       
        id = celulas[c].id;   
        if(celulas[c].value >= 1 && celulas[c].value <= 9){     
            for(var l = 1; l <= 9; l++){
                //console.log(document.getElementById('c'+id[1]+l).id);
                
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
                                // console.log(document.getElementById('c'+co+id[2]).id);                                 
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

function LinhaColuna(repeti){
    var id = repeti.id;
    
    if(repeti.value >= 1 && repeti.value <= 9){ 
    for(var l = 1; l <= 9; l++){
        //console.log(document.getElementById('c'+id[1]+l).id);
        if(document.getElementById('c'+id[1]+l).id != id){
            if(document.getElementById('c'+id[1]+l).value == repeti.value){
                repeti.style.color="#ff0000";
                break;
            }else{
                if(l == 8){
                    for(var co = 1; co <= 9; co++){
                        // console.log(document.getElementById('c'+co+id[2]).id);
                         if(document.getElementById('c'+co+id[2]).id != id){
                             if(document.getElementById('c'+co+id[2]).value == repeti.value){
                                 repeti.style.color="#ff0000";
                                 break;
                             }else{
                                repeti.style.color="#000000";
                             }
                         }
                     }
                }
            }
        }
    }
    
}
}

//Identificando a grande do input
function addEvento(){
    var caixas = document.querySelectorAll('.c');    
    for(var i = 0; i < caixas.length; i++){
        caixas[i].addEventListener('focus', function(){
            this.select();
        });

        caixas[i].addEventListener('input', function(){
            this.value = this.value.replace(/\D/g, '');
            this.value = this.value.substring(0,1);
            this.select();
            TodasLinhaColuna();            
        });
        
        
    }
}

window.addEventListener('load',addEvento);