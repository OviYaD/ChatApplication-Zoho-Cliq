export const getMessageThroughSocket = (socket,id,offset=0) =>{
    console.log("fetching messages.....",socket)
        socket.emit("fetch-message",{
            chat_id:id,
            offset
        })
}

export const createMessage = (socket,message) =>{
    console.log("emitting mssage .....",message);
    socket.emit("create-message",message);
}

export const deleteMessage = (socket,message_id) => {
    console.log("deleting message.....",message_id)
    socket.emit("delete-message",{id:message_id});
}

export const editMessage = (socket, id , content) => {
    console.log("editing messages.....",socket)
        socket.emit("edit-message",{
            id,
            content
        })
}

export const toggleReaction = (socket,id,reaction) => {
    console.log("React message....");
    socket.emit("react-message",{
        reaction,
        id
    })
}

export const markAsRead = (socket,id)=>{
    console.log("mark as read")
    socket.emit("read-message",{
        chat_id:id
    });
}