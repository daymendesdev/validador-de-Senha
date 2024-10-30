function validarSenha(event) {
    event.preventDefault();

    const senha = document.getElementById("password");
    const senha2 = document.getElementById("confirmPassword");
    const exibirErro = document.getElementById("exibirErro");

    if (senha.value === senha2.value) {
        window.location.href = "opcoes.html";
    } else {
        document.getElementById("exibirErro").innerText = "As senhas devem ser iguais!";
        document.getElementById("exibirErro").style.color = "red";
    }
}

const formulario = document.getElementById("formCadastr");
formCadastro.addEventListener("submit", validarSenha);