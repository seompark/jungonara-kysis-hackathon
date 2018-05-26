const io = require('socket.io')()
const dummy = require('./dummy')

io.on('connection', socket => {
    console.log('connected')
    socket.on('chat', ({ from, message }) => {
        console.log('chat')
        io.emit('chat', { from, message })
    })
    socket.on('school request', ({ to, school }) => {
        console.log('requested')
        io.emit('school request', { to, school })
    })
    socket.on('school response', ({ to, school, decision }) => {
        console.log('responsed')
        io.emit('school response', { to, school, decision })
    })
})

exports.io = io

/*

[Client 0] Send REQUEST_SCHOOL to [Server] ({ uid: Number, schoolId: Number }) ->  [Server] REQUEST_SCHOOL to [CLIENT 1] ({ school: { id: Number, name: String }, requestId: Number })
[Client 1] Recieve REQUEST_SCHOOL -> [Client 1] Send RESPONSE_SCHOOL to [Server] ({ requestId: Number, dicision: Boolean })
[Server] Recieve RESPONSE_SCHOOL from [Client 1] -> [Server] Send RESPONSE_SCHOOL to [Client 0] ({ from: User })

*/
