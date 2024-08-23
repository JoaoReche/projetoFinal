function enviarForm(info) {
    const nome = info.nome.value;
    const sobrenome = info.sobrenome.value;
    const email = info.email.value;
    const tel = info.tel.value;
    const msg = info.msg.value;

    const exibirForm = document.getElementById('exibirForm');

    if (exibirForm.style.display == "none") {
        exibirForm.style.display = "block";
    }
    else {
        exibirForm.style.display = "none";
    }
    
    document.getElementById('exibirInfo').innerHTML = `Nome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nTelefone: ${tel}\nMensagem: ${msg}`;
}