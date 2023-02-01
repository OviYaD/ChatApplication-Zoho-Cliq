import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';

export const initSocket = () =>{
    console.log("socket testing");
    const socket = io.connect(process.env.React_APP_END_POINT, {
      query: { "token": localStorage.getItem("token") },
      'transports': ['websocket', 'polling'],
    });
    console.log(socket);
    socket.on("connect", () => {
      console.log(socket.id);

    });
    socket.on("disconnect", () => {
      console.log(socket.id);
    });

    return () => {
      if (socket.readyState === 1) { // <-- This is important
        socket.close();
      }
    }
}