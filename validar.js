function validarSenha(event) {
    event.preventDefault();

    const senha = document.getElementById("password");
    const senha2 = document.getElementById("confirmPassword");
    const exibirErro = document.getElementById("exibirErro");
    const email = document.getElementById("email").value;
    const emailsCadastrados = ["daymendesdev@gmail.com", "daymendesrp@gmail.com", "luam.lc19@gmail.com"];
    
    if (emailsCadastrados.includes(email)) { 
        document.getElementById("exibirErro").innerText = "Há um cadastro com esse e-mail no nosso sistema!";
        document.getElementById("exibirErro").style.color = "red";
        return;
    }

    if (senha.value.length < 5 || senha2.value.length < 5) {
        document.getElementById("exibirErro").innerText = "Sua senha deve possuir mais de 5 dígitos!";
        document.getElementById("exibirErro").style.color = "red";
    }else if (senha.value !== senha2.value) {
        document.getElementById("exibirErro").innerText = "As senhas devem ser iguais!";
        document.getElementById("exibirErro").style.color = "red";
    }else {
        window.location.href = "opcoes.html";
    }
}

const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", validarSenha);