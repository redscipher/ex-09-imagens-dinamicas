//chamanda do JQuery pelo '$()'
$(document).ready(function(){
    //manipulando objeto sem JQuery: necessario escrever o codigo puro
    console.log(document.querySelector('header button'));

    //chamando evento com JQuery: evento click
    $('header button').click(function(){
        // aplica efeito animacao
        $('form').slideToggle();
    });

    // adiciona acao ao evento 'submit' do formulario: escuta evento
    $('form').on('submit', function(e){
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
            </div>`).appendTo(novoItem);
        //efetua insercao pelo metodo append()
        $('ul').append(novoItem)
        //aplica animacao p/ exibir
        novoItem.fadeIn(2000);
        // reseta campo
        eStrUrl.val('');
    })

    $('#botao-cancelar').click(function(){
        console.log('evento com JQuery com funcao_tipo()');
        //aplica efeito
        $('form').fadeOut();
    });
});