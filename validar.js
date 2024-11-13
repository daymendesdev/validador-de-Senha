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

    if (senha.value === senha2.value) {
        window.location.href = "opcoes.html";
    } else {
        document.getElementById("exibirErro").innerText = "As senhas devem ser iguais!";
        document.getElementById("exibirErro").style.color = "red";
    }
}

const formulario = document.getElementById("formCadastr");
formCadastro.addEventListener("submit", validarSenha);