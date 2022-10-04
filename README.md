# DeathList



SPACE.JS 
Começando pela estrutura principal do código, a "space.js"
Nós definimos um local para hospedar o site, logo após nós fizemos uma função para marcar todos os checkbox Uma outra função também definida foi a de inserção (inserir), nela usamos um comando pra não ficar carregando Na função excluir, tem a funcionalidade de quando for usar excluir os itens 1 por 1, e termos uma caixinha Na função Pursuit, nós vamos resolver o problema de busca pelos contatos, seja por nome, número ou id.
Na função editar, é pra ação ao lado de excluir, ela vai nos permitir editar o contato ao abrir o modal Na função chamada attLista(), estaremos usando um fetch chamando a webAPI, para a parte de atualizar sempre
que existem na parte de id, e o chamamos.
toda vez que for adicionada um novo elemento, fizemos um comando method para podermos ficar adicionando um elemento na nossa lista, um metódo 'POST'.
pop-up pedindo a confirmação, usamos de outro metódo pra isso, o 'DELETE'
da direita, nela usamos eventPreventDefault, pois cai no mesmo problema anterior, após isso usaremos um fetch diretamente pra nossa webAPI, logo após isso chamaremos nossa próxima função para atualizar, e usaremos um metódo de object eventTarget para qnd clicarmos fora do modal ele fechar, a grosso modo falando.
que fizermos alguma mudança, mudar apenas na parte ".../compras/", uma promessa para a parte do html e conseguirmos devolver uma atualização nos id's, itens e quantidades.
no final de tudo, chamamos a mesma. 


Filtrar.js 
Nesse arquivo de js, faremos uma função para filtrarmos no campo de busca, chamaremos o campo de busca do html transfomaremos ele minúsculo, sempre, percorreremos em todas as tr da tbody. 
Após isso faremos um for in começando por uma variável chamada posicao para percorrer todas as tr's e ler, como temos a função continue e ela foi definida como 'NaN', não irá parar e nem ficar em loop, sendo assim, chamaremos uma var chamada Line, ela ira ler todo o elemento da line como texto e minúsculo, para conseguirmos buscar.


Excluir.js
Nesse arquivo .js, faremos uma função para chamarmos um button para remover todos os itens marcados caso ele ultrapasse mais ou igual a 2 contatos marcados. Criaremos uma função para o botão, e selecionaremos um botão do html, logo após isso chamaremos uma var chamada quantidade = 0, que simulará a qntd de caixa marcada para acionar o botão de excluirtodos.
Na função excluirSelecionados, logo após percorrermos, abriremos um pop-up, se a resposta for sim, usaremos um fetch para deletar no banco de dados com metódo de 'DELETE'.



DB.js
É a webAPI, banco de dados, servirá para guardar todas as nossas informações e metódos pedidos, seja
