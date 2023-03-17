import React, { useEffect, useState } from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer/MainContainer';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { setSocket, removeSocket } from '../../redux/slices/socketSlice';
import { useSelector } from 'react-redux';
import { Worker } from '@react-pdf-viewer/core';
import LoadingPage from '../../components/loaders/LoadingPage';


export default function AppContainer() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState(false);
  const [reload, setReload] = useState(true);
  const [isFinished, setFinishState] = useState(false);
  const searchParams = new URLSearchParams(document.location.search);


  useEffect(() => {
    initSocket();
  }, [])

  const initSocket = () => {
    console.log("socket testing");
    const socket = io.connect(process.env.REACT_APP_SOCKET_END_POINT, {
      path: "/api/socket.io",
      secure: true,
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
      console.log("fetching messages...", data);
      setNewMsg(!data.isReload);
      data.isReload ? setMessages((messages) => [...data.messages, ...messages]) : setMessages(data.messages)
      setReload(true);
      setFinishState(data.isFinished);

    })
    // socket.on("send-message", (data) => {

    //   setMessages((messages) => [...messages, data])
    //   setNewMsg(true);
    // })

    socket.on("read-message", (data) => {
      console.log("read message", data.messages);
      if (data.messages) {
        console.log(data.messages, messages)
        setMessages((messages) => messages.map((msg, index) => {
          for (let i = 0; i < data.messages.length; i++) {
            if (msg._id === data.messages[i]._id) {
              return data.messages[i]
            }
          }
          return msg;
        }))
        // console.log(readMsg);
        // setMessages(readMsg);

      }

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
      console.log("received edited msg", data, messages);
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
    {user.first_name && socket ? <div style={{ backgroundColor: "black", position: "fixed", width: "100%", fontFamily: "zoho-puvi-regular" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <MainContainer setNewMsg={setNewMsg} isFinished={isFinished} setReload={setReload} reload={reload} socket={socket} messages={messages} setMessages={setMessages} newMsg={newMsg}></MainContainer>
      </Worker>

    </div> : <LoadingPage></LoadingPage>}
  </>;

}