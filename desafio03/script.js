function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pega ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //calculo de idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // variavel da imagem
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe_homem.png') //adiciona foto
            } else if (idade > 10 && idade < 21) {
                //joverm
                img.setAttribute('src', 'imagens/jovem_homem.png')
            } else if (idade > 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_homem.png')
            }   
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe_mulher.png')
            } else if (idade > 10 && idade < 21) {
                //joverm
                img.setAttribute('src', 'imagens/jovem_mulher.png')
            } else if (idade > 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_mulher.png')
            } 
        }
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    } 
    
}
