export const getMessageThroughSocket = (socket,id,is_private,message,offset=0) =>{
    console.log("fetching messages.....",message)
        socket.emit("fetch-message",{
            chat_id:id,
            is_private,
            message,
            offset,
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

export const markAsRead = (socket,id,is_private)=>{
    console.log("mark as read")
    socket.emit("read-message",{
        chat_id:id,
        is_private
    });
}

export const permissionUpdate = (socket,channel_id,permissions) => {
    socket.emit("edit-permissions",{
        channel_id,
        permissions
    })
} 

export const sendNotification = (socket,id,token) => {
    console.log("sent notification.....");
    socket.emit("send-notification",{
        id,
        token
    })
}

export const upinChats = (socket,chat_id) => {
    socket.emit("unpin-chat",{
        chat_id,
        organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id
    })
}

export const pinChats = (socket,chat_id,chat_type,organization_id) => {
    console.log("pin chat.........")
    socket.emit("pin-chat",{
        chat_id,
        chat_type,
        organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id
    })
}