function contador() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var resul = document.getElementById('resul')


    if (ini.value.length == 0  || fim.value.length == 0 || pas.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        resul.innerHTML = 'Impossível contar'
    } else {
        resul.innerHTML = 'Contando:<br/>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { //Contagem regressiva
            for (var c = i; c <= f; c += p) {
                resul.innerHTML += c + String.fromCodePoint(0x1F449)    //add emote forma 1
            }
        } else{
            for (var c = i; c >= f; c -= p){ //Contagem regressiva
                resul.innerHTML += ` ${c} \u{1F449}` //add emote forma 2
            }
        }
        resul.innerHTML += String.fromCodePoint(0x1F3C1)
    }
}