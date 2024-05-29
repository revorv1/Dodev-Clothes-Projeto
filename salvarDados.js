
window.onload = function () {
    loadSavedValues();
    document.getElementById('meuFormulario').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar o envio padrão do formulário
        saveBeforeSubmit();
    });
};
function saveBeforeSubmit() {
    // Salvar os valores antes de enviar o formulário
    saveValue(document.getElementById('nome'));
    saveValue(document.getElementById('email'));
    saveValue(document.getElementById('telefone'));
}
function saveValue(input) {
    localStorage.setItem(input.id, input.value);
}
function loadSavedValues() {
    document.getElementById('nome').value = localStorage.getItem('nome')
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('telefone').value = localStorage.getItem('telefone') || '';

}
function enviarParaAPI() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const dados = {
        nome: nome,
        email: email,
        telefone: telefone
    };


    fetch("https://apigenerator.dronahq.com/api/tyx4fztR/loja", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {

            console.log('Resposta da API:', data);
            alert('Dados enviados com sucesso!');
        })
        .catch(error => {

            console.error('Erro ao enviar dados para a API:', error);
            alert('Erro ao enviar dados para a API');
        });
}