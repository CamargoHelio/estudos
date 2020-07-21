var agora = new Date()
var hora = agora.getHours() + ":" + agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < '12:00') {
    console.log('Bom dia!')
} else if (hora <= '18:00'){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}