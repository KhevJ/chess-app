import { io } from "socket.io-client"; // import connection function

const socket = io('https://fierce-sea-36492-d2458e254593.herokuapp.com'); // initialize websocket connection

export default socket;