const VISOR =document.getElementById('visor');
let memoriaAuxiliar = 0;
let operacao = false;
let opeVar = '';
let gravaMemoria = '';

function selecionarDigito(numero){
    if(parseFloat(VISOR.innerHTML)=== 0 ){
        VISOR.innerHTML = '';
    }    
    if(operacao === true){
        operacao = false;
        VISOR.innerHTML = '';
    }           
    VISOR.innerHTML += numero;
}
function resultado(){
         if(opeVar === '+'){
        VISOR.innerHTML = memoriaAuxiliar + parseFloat(VISOR.innerHTML);
   }else if(opeVar ==='-'){
        VISOR.innerHTML = memoriaAuxiliar - parseFloat(VISOR.innerHTML);
           }
    else if(opeVar === '*'){
        VISOR.innerHTML = memoriaAuxiliar * parseFloat(VISOR.innerHTML);
           }
    else if(opeVar === '/'){
        VISOR.innerHTML = memoriaAuxiliar / parseFloat(VISOR.innerHTML);
    }               
   memoriaAuxiliar = 0;
}
function somar(){
    opeVar = '+';
         if( memoriaAuxiliar !== 0){
            VISOR.innerHTML = memoriaAuxiliar + parseFloat(VISOR.innerHTML);
      }
    operacao = true;
    memoriaAuxiliar = parseFloat(VISOR.innerHTML); 
}
function subtrair(){
    opeVar = '-';
            if (memoriaAuxiliar !== 0) {  
            VISOR.innerHTML = memoriaAuxiliar - parseFloat(VISOR.innerHTML);                  
    }
    operacao = true;
    memoriaAuxiliar = parseFloat(VISOR.innerHTML);
}
function multiplicar(){
    opeVar = '*'
    if (memoriaAuxiliar !== 0) {   
             
        VISOR.innerHTML = memoriaAuxiliar * parseFloat(VISOR.innerHTML);                  
    }
    operacao = true;
    memoriaAuxiliar = parseFloat(VISOR.innerHTML);
}
function dividir(){
    opeVar = '/'
    if (memoriaAuxiliar !== 0) {                
        VISOR.innerHTML = memoriaAuxiliar / parseFloat(VISOR.innerHTML);                  
    }
    operacao = true;
    memoriaAuxiliar = parseFloat(VISOR.innerHTML);
}
function limpar(){
    VISOR.innerHTML = '0';
    memoriaAuxiliar = 0;
    operacao = false;
    opeVar = '';
}
function writeMemory(){
    if(gravaMemoria !== 0){
        gravaMemoria = VISOR.innerHTML;
    console.log(gravaMemoria);
    }
    return;    
}
function enviaMemoria(){
    VISOR.innerHTML = gravaMemoria;
    console.log(gravaMemoria);
}
