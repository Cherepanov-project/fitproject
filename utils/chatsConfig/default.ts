export const SOCKET_URL = process.env.SOCKET_URL || "http://localhost:9999";
import io from 'socket.io-client'
export const socket = io("http://localhost:9999")
