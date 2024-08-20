//chamanda do JQuery pelo '$()' : valida documento carregado
$(document).ready(function(){

    //manipulando objeto sem JQuery: necessario escrever o codigo puro
    console.log($('header button'));

    // funcoes
    let abreFechaForm = function(){
        try {
            // aplica efeito animacao
            $('form').slideToggle();
        } catch (error) {
            console.log(error.stack);
        }
    }

    let fechaForm = function(){
        try {
            console.log('evento com JQuery com funcao_tipo()');
            //aplica efeito
            $('form').fadeOut();
        } catch (error) {
            console.log(error.stack);
        }
    }

    let adicionaImagem = function(e){
        try {
            e.preventDefault();
            // constante
            const eStrUrl = $('#idUrl');
            /////////// retorna valor do campo
            const enderecoImagem = eStrUrl.val();
            // adciona novo elemento na lista
            const novoItem = $('<li class="clsItemLista"></li>');
            // imagem + efetua adicao de fato com metodo appendTo()
            $(`<img src="${enderecoImagem}"></img>
                <div class="overlay-imagem-link">
                    <a href="${enderecoImagem}" target="_blank">Ver imagem em tamanho real</a>
                    <button type="button" class="btn-deleta"><i class="bi bi-trash text-white"></i></button>
                </div>`).appendTo(novoItem);
            //efetua insercao pelo metodo append()
            $('ul').append(novoItem)
            //aplica animacao p/ exibir
            novoItem.fadeIn(2000);
            // reseta campo
            eStrUrl.val('');
        } catch (error) {
            console.log(error.stack);
        }
    }

    let excluirImagem = function(e){
        try {
            // remove item mais proximo do clique
            $(this).closest('li').remove();
        } catch (error){
            console.log(error.stack);
        }
    }

    // eventos : chamando evento com JQuery: evento click
    $('header button').on('click', (abreFechaForm));
    // adiciona acao ao evento 'submit' do formulario: escuta evento
    $('form').on('submit', adicionaImagem)
    $('#botao-cancelar').on('click', (fechaForm));
    // deleta item
    $('ul').on('click', 'li button', excluirImagem)
});