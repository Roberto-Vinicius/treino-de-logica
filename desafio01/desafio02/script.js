function carregar() {
    /*link dos ids*/
    var msg = document.getElementById('msg')
    var sau = document.getElementById('sau')
    var img = document.getElementById('imagem')

    /*pega hora atual*/
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.scr = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f' //troca a cor do fundo de acordo com a hora
        sau.innerHTML = 'Bom Dia'
    } else if (hora > 12 && hora <18) {
        // BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background ='#b9846f' 
        sau.innerHTML = 'Boa Tarde'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgb(13, 45, 94)'
        sau.innerHTML = 'Boa Noite'
    }
}