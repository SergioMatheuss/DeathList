function filtrar (){
    let exp = input_pursuit.value.toLowerCase();
    let lines = tab_buy.getElementsByTagName ('tr');

    console.log (lines);
    for (let posicao in lines){
        if (isNaN(posicao) ) {
            continue;
        }
        let coluna1 = lines[posicao].children[1].innerText.toLowerCase();
        let coluna2 = lines[posicao].children[2].innerText.toLowerCase();
        let colunas = coluna1 + coluna2;
        
        let line = lines[posicao].innerText.toLowerCase();

        if (line.includes(exp)){
            lines[posicao].style.display = '';
     }  else
            lines[posicao].style.display='none';

        console.log (posicao);
    }
}




