const BTN_AVANCAR = document.getElementById('avancar');
const BTN_VOLTAR = document.getElementById('voltar');
const PROGRESSO = document.getElementById('progresso');

const STEP_1 = document.getElementById('step-1');
const STEP_2 = document.getElementById('step-2');
const STEP_3 = document.getElementById('step-3');

const INPUT_NOME = document.getElementById('nome');
const INPUT_EMAIL = document.getElementById('email');
const INPUT_SENHA = document.getElementById('senha');
const INPUT_CONFIRMAR_SENHA = document.getElementById('confirm_senha');

const MSG_ERRO = document.getElementById('msg-erro');

let passoAtual = 1;

function alterarNome() {
    MSG_ERRO.innerHTML = '';
    INPUT_NOME.classList.remove('is-invalid');

    INPUT_NOME.value = INPUT_NOME.value.toUpperCase();
    
    if (INPUT_NOME.value.length >= 3) {
        INPUT_NOME.classList.add('is-valid');
    }
}

function alterarEmail() {
    MSG_ERRO.innerHTML = '';
    INPUT_EMAIL.classList.remove('is-invalid');
    
    if (INPUT_EMAIL.value.length >= 3) {
        INPUT_EMAIL.classList.add('is-valid');
    }
}

function validarStep1() {
    let estaValido = true;

    if (INPUT_NOME.value === '') {
        INPUT_NOME.classList.add('is-invalid');
        MSG_ERRO.innerHTML = 'Nome está invalido';
        estaValido = false;
    }

    if (INPUT_EMAIL.value === '') {
        INPUT_EMAIL.classList.add('is-invalid');
        MSG_ERRO.innerHTML = 'Email está invalido';
        estaValido = false;
    }

    return estaValido;
}

function validarStep2() {
    if (passoAtual !== 2) {
        return true;
    }

    let estaValido = true;

    if (INPUT_SENHA.value === '') {
        INPUT_SENHA.classList.add('is-invalid');
        MSG_ERRO.innerHTML = 'Senha invalida';
        estaValido = false;
    }

    if (INPUT_CONFIRMAR_SENHA.value !== INPUT_SENHA.value) {
        INPUT_CONFIRMAR_SENHA.classList.add('is-invalid');
        MSG_ERRO.innerHTML = 'Senhas não conferem';
        estaValido = false;
    }

    return estaValido;
}

function atualizarProgresso() {
    if (passoAtual > 3 || passoAtual < 1) {
        return;
    }

    PROGRESSO.innerHTML = passoAtual + "/3";
    MSG_ERRO.innerHTML = '';

    if (passoAtual === 1) {
        STEP_1.style.display = 'block';
        STEP_2.style.display = 'none';
        STEP_3.style.display = 'none';
    }

    if (passoAtual === 2) {
        STEP_1.style.display = 'none';
        STEP_2.style.display = 'block';
        STEP_3.style.display = 'none';
    }

    if (passoAtual === 3) {
        STEP_1.style.display = 'none';
        STEP_2.style.display = 'none';
        STEP_3.style.display = 'block';
    }
}

function avancar() {
    if (validarStep1() === false) {
        return;
    }

    if (validarStep2() === false) {
        return;
    }

    passoAtual += 1;

    if (passoAtual > 2) {
        BTN_AVANCAR.innerHTML = 'Finalizar';
        atualizarProgresso();
        return;
    }

    atualizarProgresso();
    BTN_VOLTAR.removeAttribute('disabled');
}

function voltar() {
    passoAtual -= 1;

    BTN_AVANCAR.innerHTML = 'Avançar';
    
    if (passoAtual < 2) {
        BTN_VOLTAR.setAttribute('disabled', 'disabled');
    }
    
    atualizarProgresso();
}
