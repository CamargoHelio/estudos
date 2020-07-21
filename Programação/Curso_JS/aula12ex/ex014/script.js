function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() + ":" + data.getMinutes()


msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= '6:00' && hora < '12:00'){
    //BOM DIA
    img.src = 'foto-manha.png'
    document.body.style.background = '#adddfc'
} else if (hora >= '12:00' && hora < '18:00'){
    //BOA TARDE
    img.src = 'foto-tarde.png'
    document.body.style.background = '#ef5d01'
}else{
    //BOA NOITE
    img.src = 'foto-noite.png'
    document.body.style.background = '#052e61'
}
}