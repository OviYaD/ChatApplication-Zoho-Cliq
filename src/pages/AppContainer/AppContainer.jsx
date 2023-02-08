import React, { useEffect, useState } from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer/MainContainer';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { setSocket, removeSocket } from '../../redux/slices/socketSlice';
import { useSelector } from 'react-redux';
import LoadingPage from '../../components/loaders/LoadingPage';


export default function AppContainer() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState(false);
  const [reload, setReload] = useState(true);
  const [isFinished, setFinishState] = useState(false);


  useEffect(() => {
    initSocket();
  }, [])

  const initSocket = () => {
    console.log("socket testing");
    const socket = io.connect(process.env.REACT_APP_SOCKET_END_POINT, {
      query: { "token": localStorage.getItem("token") },
      'transports': ['websocket', 'polling'],
    });
    console.log(socket);
    socket.on("connect", () => {
      console.log(socket.id);
      setSocket(socket);
      // dispatch(setSocket({ socketId: socket.id }));

    });

    socket.on("fetch-messages", (data) => {
      [...data.messages, ...messages].length > 15 ? setNewMsg(false) : setNewMsg(true);
      if (data.messages.length > 0 && data.messages[0]?.chat_id === messages[0]?.chat_id)
        setMessages((messages) => [...data.messages, ...messages]);
      else
        setMessages((messages) => [...data.messages])
      setReload(true);
      setFinishState(data.isFinished);

    })
    socket.on("send-message", (data) => {
      setMessages((messages) => [...messages, data])
      setNewMsg(true);
    })

    socket.on("read-message", (data) => {
      console.log("read message", data.messages);
    })

    socket.on("delete-message", (data) => {
      console.log("received deleted msg", data, messages);
      setNewMsg(false)
      setMessages((messages) => {
        const msg = [...messages];
        const index = msg.findIndex((msg) => msg._id === data._id);
        msg[index] = data;
        console.log(msg);
        return [...msg];
      });
      // setMessages((messages) => [...messages, data])
    })

    socket.on("edit-message", (data) => {
      console.log("received deleted msg", data, messages);
      setNewMsg(false);
      setMessages((messages) => {
        const msg = [...messages];
        const index = msg.findIndex((msg) => msg._id === data._id);
        msg[index] = data;
        console.log(msg);
        return [...msg];
      });
    })

    socket.on("react-message", (data) => {
      console.log("received msg", data.reactions);
      setNewMsg(false)
      setMessages((messages) => {
        const msg = [...messages];
        const index = msg.findIndex((msg) => msg._id === data._id);
        msg[index] = data;
        console.log(msg);
        return [...msg];
      });
    })

    socket.on("disconnect", () => {
      console.log("disconnected......");
      dispatch(removeSocket());
    });

    return () => {
      if (socket.readyState === 1) { // <-- This is important
        socket.close();
      }
    }
  }



  return <>
    {!socket ? <div style={{ backgroundColor: "black", position: "fixed", width: "100%", fontFamily: "zoho-puvi-regular" }}>
      <MenuBar></MenuBar>
      <MainContainer isFinished={isFinished} setReload={setReload} reload={reload} socket={socket} messages={messages} setMessages={setMessages} newMsg={newMsg}></MainContainer>
    </div> : <LoadingPage></LoadingPage>}
  </>;

}