import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Chat.css"

const Chat = ({numberadd}) => {
    const [img,setimg]=useState("")

    const chatnew=()=>{}

    useEffect(()=>{
        setimg(Math.floor(Math.random()*5000))
    })


    return !numberadd ? (
        <div className="chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${img}.svg`} />
            <div className="chat_info">
                <h2>room name</h2>
                <p>Last meassage....</p>
            </div>
            
        </div>
    ) : (
        <div className="chat" onClick={chatnew}>
            <h2>Add New chat</h2>

        </div>
    )
}

export default Chat
