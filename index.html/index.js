const participantes = [];
document.getElementById('registroForm').addEventListener('submit',function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const codigo = document.getElementById('codigo').value;

    if (nome && cpf && email && codigo) {
        participantes.push({ nome, cpf, email, codigo});
       document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('email').value = '';
    document.getElementById('codigo').value = '';
        alert('Participante registrado com sucesso!');
    } else {
     alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('mostrarLista').addEventListener('click', function () {
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(function (participante) {
        const li = document.createElement('li');
        li.textContent = ` Nome: ${participante.nome}, CPF: ${participante.cpf}, Email: ${participante.email}, Código: ${participante.codigo}`;
        lista.appendChild(li);
    });
})