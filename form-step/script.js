/* -------------- VARIAVEIS CONSTANTES -------------- */
const BTN_AVANCAR = document.getElementById('avancar');
const BTN_VOLTAR = document.getElementById('voltar');
const PROGRESSO = document.getElementById('progresso'); 
/* ---------------VARIAVEIS LET---------------------- */
let fechartela1 =document.querySelector('#form1');
let fechartela2 =document.querySelector('#form2');
let fechartela3 =document.querySelector('#form3');
/* ---------------VARIAVEIS PARA VERIFICAÇÃO---------- */
const INPUT_NOME = document.getElementById('nome');
const INPUT_EMAIL = document.getElementById('email');
const INPUT_SENHA = document.getElementById('senha');
const INPUT_CONFIRMAR_SENHA = document.getElementById('confirmar_senha');

const MSG_ERRO = document.getElementById('msg-erro')

let passoAtual =1;

function alterarNome(){
    MSG_ERRO.innerHTML= '';
    INPUT_NOME.classList.remove('is-invalid');

    INPUT_NOME.value = INPUT_NOME.value.toUpperCase();

    if(INPUT_NOME.value.length >= 3){
        INPUT_NOME.classList.add('is-valid');
    }
}

function alterarEmail(){
    MSG_ERRO.innerHTML='';
    INPUT_EMAIL.classList.remove('is-invalid');
    
    if(INPUT_EMAIL.value.length >= 3){
        INPUT_EMAIL.classList.add('is-valid');
    }
}

function atualizarProgresso(){
    PROGRESSO.innerHTML = passoAtual + "/3";

    /* ---------atualiza form1----------- */
    
    if(passoAtual === 1){
        fechartela1.style.display = "block";
        fechartela2.style.display = "none";
        fechartela3.style.display = "none";
        BTN_VOLTAR.style.display = "none";
    }
/* --------atualiza form2------------- */    
    if(passoAtual === 2){
        fechartela1.style.display = "none";
        fechartela2.style.display = "block";
        fechartela3.style.display = "none";
        BTN_VOLTAR.style.display = "block";
        BTN_AVANCAR.innerHTML='Avançar';
    }
/*-------- atualiza form3-------------  */
    if(passoAtual === 3){
        fechartela1.style.display = "none";
        fechartela2.style.display = "none";
        fechartela3.style.display = "block";
        document.getElementById('form3').innerHTML =  'Email: '+INPUT_EMAIL.value+ '<br>'+ 'Nome: '+INPUT_NOME.value;
        BTN_AVANCAR.innerHTML='Confirmar';a
    }
}
/* ----------------botão avançar---------------- ,*/
function  avancar(){    
    if(validarForm1() === false ){
        return;
    }
    if(validarForm2() == false){
        return;
    }
    if(passoAtual===3){
        return;
    }           
        passoAtual += 1;
        atualizarProgresso();   
    }
/* ----------------botão volta------------------- */
function  voltar(){
    if(passoAtual === 1){        
        return; 
    }     
        passoAtual -= 1;
        atualizarProgresso();
    }
/* ------------VALIDAR FORM1------------------- */
function validarForm1(){
    let estaValido = true;

    if(INPUT_NOME.value === ''){
        /* alert('Digite pelos menos 1 nome'); */
        INPUT_NOME.classList.add('is-invalid');
        MSG_ERRO.innerHTML = 'Nome esta Invalido';
        estaValido = false;        
    }
    if( INPUT_EMAIL.value === ''){
        INPUT_EMAIL.classList.add('is-invalid');
        MSG_ERRO.innerHTML = "Email esta Invalido";
        /* alert('DIGITE SEU EMAIL'); */
        estaValido = false;       
    }
    return estaValido;
}
/* --------------VALIDAR FORM2------------------ */

    function validarForm2(){
        if(passoAtual !==2){
            return true;
        }

        let estaValido = true;

    if(INPUT_SENHA.value ===''){
        INPUT_SENHA.classList.add('is-invalid');
        INPUT_SENHA.innerHTML = 'Senha Não pode ser Vazia';
        estaValido = false;
    }
    if(INPUT_SENHA.value !== INPUT_CONFIRMAR_SENHA.value){
        INPUT_CONFIRMAR_SENHA.classList.add('is-invalid');
        INPUT_CONFIRMAR_SENHA.innerHTML ='Senhas Não Conhecidem';
        estaValido = false;
    }
    return estaValido;
}