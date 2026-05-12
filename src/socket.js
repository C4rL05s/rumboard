// Creating single Socket.IO connection to use in any Vue component
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

// Get username from local storage
const username = localStorage.getItem('username')
if (username) {
    // Emit event to put user in a room
    socket.emit('connect-user', username)
}
// Else user will not be put in a room

export default socket
