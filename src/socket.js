// Creating single Socket.IO connection to use in any Vue component
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

export default socket
