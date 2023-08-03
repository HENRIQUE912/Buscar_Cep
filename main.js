function buscarEndereco() {
    var cep = document.getElementById("cepInput").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                exibirResultado(data);
            } else {
                exibirMensagemErro("CEP não encontrado");
            }
        })
        .catch(error => {
            exibirMensagemErro("Erro na consulta do CEP");
            console.error(error);
        });
}

function exibirResultado(data) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
    `;
}

function exibirMensagemErro(mensagem) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p class="erro">${mensagem}</p>`;
}
//1