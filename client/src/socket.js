import { io } from "socket.io-client"; // import connection function

const socket = io("https://chess-game-8e69b6359bbf.herokuapp.com") // initialize websocket connection

export default socket;