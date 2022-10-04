function acBtndel (){
    btnrem.classList.remove('d-none');
    
    
    let allcheck = document.querySelectorAll('[data-check="acao"]')
    let quantidade = 0;

    allcheck.forEach((cadaCheck) => {
        cadaCheck.checked === true && quantidade++;

        if(quantidade >= 2){
            btnrem.classList.remove('d-none');
        } else {
            btnrem.classList.add('d-none');
        }
    
    })
}
function excluirSelecionados (){
    if(false === confirm('Tem certeza o.O ??!')){
        return;
    }
        let todosChecks = document.querySelectorAll ('[data-check="acao"');
        todosChecks.forEach(async (cadaCheck) => {
        if (cadaCheck.checked === true){
        await fetch(API_URL + '/blocklist/' + cadaCheck.value, {
                method: 'DELETE'
            });
        }
        
        attLista();
    })
}