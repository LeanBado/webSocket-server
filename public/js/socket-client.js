
const online = document.querySelector('#online')
const offline = document.querySelector('#offline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io()

socket.on('connect', ()=>{
    offline.style.display = "none"
    online.style.display = ""
})

socket.on('disconnect', ()=>{
    offline.style.display = ""
    online.style.display = "none"
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: "123ABC",
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('mensaje desde el svr', id)
    })
})

socket.on('enviar-mensaje', (payload)=>{
    console.log('recibiendo', payload)
})