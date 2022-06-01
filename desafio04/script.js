function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (passo.value.length == 0 || fim.value.length == 0 || inicio.value.length == 0) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        res.innerHTML = ('Contando.. <br>')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c +=p) {
                res.innerHTML += (` ${c} 👉 `)
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `✋`
    }
}
