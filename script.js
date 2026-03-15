//botão do modo escuro

const botaoEsc = document.getElementById ('tema_escuro');

function mudarTema() {
    document.body.classList.toggle ('modo-escuro');
}

botaoEsc.addEventListener ('click', mudarTema);

//botão do formulário

const nome = document.getElementById ('nome');
const email = document.getElementById ('email');
const mensagem = document.getElementById ('mensagem');
const enviar = document.getElementById ('enviar');
const formulario = document.getElementById ('formulario');

// Validação de campos obrigatórios antes do envio dos dados
formulario.addEventListener ('submit', function(event) {
    if (nome.value.trim() === '') {
        event.preventDefault();
        alert('Você esqueceu de digitar o seu nome!');
    }
    else if (email.value.trim() === '') {
        event.preventDefault();
        alert('Você esqueceu de digitar o seu e-mail!');
    }
    else if (mensagem.value.trim() === '') {
        event.preventDefault();
        alert('Você esqueceu de digitar a sua mensagem!!');
    }
    else {
        alert('Formulário enviado com sucesso!!')
    }

    // Limpa os campos após o sucesso
        nome.value = '';
        email.value = '';
        mensagem.value = '';
});