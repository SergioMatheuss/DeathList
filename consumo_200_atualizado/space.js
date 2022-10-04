const API_URL = 'http://localhost:8000'
function markall(){
let todos = document.querySelectorAll ('[data-check="acao"]');

todos.forEach ((cadaCheck) => {
    cadaCheck.checked = check_all.checked;
})
acBtndel ();
};

function inserir() {
    //para a página não ser recarregada
    event.preventDefault();
    let dados = {
        item:input_item.value,
        quantidade: parseInt(input_quantidade.value),
    };
    fetch('http://localhost:8000/blocklist', {
        method: 'POST',
        body:  JSON.stringify(dados),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(resposta => resposta.json())

    .then(resposta => attLista())
        form_add.reset();
}

async function excluir(id) {
    let resposta = confirm ('Você tem certeza?');

    if (resposta !== true) {
        return;
    }
    await fetch('http://localhost:8000/blocklist/'+ id, {
        method: 'DELETE'
});
attLista();

}
function pursuit(id){
    input_editar_id.value = id
    fetch(API_URL + '/blocklist/'+ id)
    .then (resposta => resposta.json())
    .then (dados =>  { //Isso responde a ideia de res.//
        input_editar_item.value = dados.item;
        input_editar_qtd.value = dados.quantidade;

    });
}
function editar() {
    input_editar_id.value,
    event.preventDefault ();
    let dados = {
        item: input_editar_item.value,
        quantidade: input_editar_qtd.value,
        
    };
fetch(API_URL+'/blocklist/'+input_editar_id.value, {
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'content-Type': 'application/json'
        
        }
})
        
        .then(res => res.json)
        .then(() => attLista() )
        let x = document.querySelector('["data-bs-dismiss="offcanvas"]')
        x.dispatchEvent (new Event('Click'));
}

function attLista(){
    tab_buy.innerHTML = '';
    fetch('http://localhost:8000/blocklist/')
    .then(function(resposta){
        return resposta.json();
    })
    .then (function(devol){
        devol.forEach(function(cadaItem){
        tab_buy.innerHTML += ` 
            <tr>
                <td> <input onclick="acBtndel()"  value="${cadaItem.id}"data-check="acao" type="checkbox"> </td>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.item}</td>
                <td>${cadaItem.quantidade}</td>
                <td>
                    <button onclick= "pursuit(${cadaItem.id}) "data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-warning">
                        Editar
                    </button>
                    <button onclick="excluir(${cadaItem.id})" class="btn btn-danger">
                        Excluir
                    </button>
                </td>
            </tr>`;
        });
    })
}

attLista();