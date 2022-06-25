const VISOR =document.getElementById('visor');

let memoriaAuxiliar = 0;
let operacao = false;

function somar(){
    operacao = true;
    memoriaAuxiliar = parseInt(VISOR.innerHTML);

    if( memoriaAuxiliar !== 0){
        VISOR.innerHTML = memoriaAuxiliar + parseInt(VISOR.innerHTML);

    }
  //  
}


function selecionarDigito(numero){
    if(parseInt(VISOR.innerHTML)===0 ){
        VISOR.innerHTML = '';
    }
    if(operacao = true){
        operacao = false;
        VISOR.innerHTML = '';
    }

    VISOR.innerHTML += numero;
}

