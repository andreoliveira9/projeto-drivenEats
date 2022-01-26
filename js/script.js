function selecionaItem(produto){
    produtos = produto.parentNode
    produtos.childNodes.forEach(function(p){
        if(p.classList){
             if(p.classList.contains('selecionado')){
                    p.classList.remove('selecionado')
                }
            }
        })
    produto.classList.add("selecionado")
    contaSelecionados()
    if(contaSelecionados() == 3){
        let botao = document.querySelector('button')
            botao.disabled = false;
            botao.innerHTML = "Fechar Pedido"

    }
}
function contaSelecionados(){
    let selecionados = document.querySelectorAll('.selecionado')
    return selecionados.length
}