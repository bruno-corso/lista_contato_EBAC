const form = document.querySelector('form')
let nomes = [];
let telefones = [];


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.getElementById('nome-input').value
    let telefone = document.getElementById('tel-input').value

    if (nomes.includes(nome)) {
        alert('Contato Já Existe')
    }
    else if (nome.split(' ').length<=1){
        alert('Insira pelo menos 2 nomes do contato')
    } else {
        nomes.push(nome)
        telefones.push(telefone)
        adicionaNaTabela();
        contarContatos();
    }

})

function adicionaNaTabela() {
    let body_tabela = document.getElementById('corpo-table')
    body_tabela.innerHTML = ''
    for (let i = 0; i < nomes.length; i++) {
        let n = nomes[i];
        let t = telefones[i];
        let itens = ''
        itens +=
            `
                <tr>
                    <td>${n}</td>
                    <td>${t}</td>
                </tr>
            `
        body_tabela.innerHTML += itens

    }
}

function contarContatos() {
    let foot_tabela = document.getElementById('foot-table')
    foot_tabela.innerHTML = ''
    foot_tabela.innerHTML = `
        <td>Qtd. Contatos</td>
        <td>${nomes.length}</td>
    `
}