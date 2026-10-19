document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    
    // Eventos del Usuario

    // Eventos de Websocket
    socket.on('loaded', (data) => {
        console.log(`se ha detectado una nueva conexion ${data.id}`)
    })
})