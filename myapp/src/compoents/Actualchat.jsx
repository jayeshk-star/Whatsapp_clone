import './Actualchat.css'
import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { AttachFile, SearchOutlined,InsertEmoticon } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import MicIcon from "@material-ui/icons/Mic"

const Actualchat = () => {
  const [img, setimg] = useState('')
  const [input,setinput]=useState("")

  useEffect(() => {
    setimg(Math.floor(Math.random() * 5000))
  })
  const sendmassage=(e)=>{
      e.preventDefault()
      setinput("")
  }
  return (
    <div className='headerchat'>
      <div className='Chatheader'>
        <Avatar src={`https://avatars.dicebear.com/api/human/b${img}.svg`} />
        <div className='chat_header_info'>
          <h3>Room Name</h3>
          <p>Last seen at ....</p>
        </div>
        <div className='headerRigth'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='actalchat_middle'>
        <p className={`chat_massage ${true && `chat_receiver`}` }>
          <span className='chat_name'>jayesh</span>
        hello what is your name
          <span className='timestamp'>{new Date().toLocaleTimeString()}</span>
        
        </p>
        <p className='chat_massage'>
          <span className='chat_name'>jayesh</span>
          <span className='timestamp'>{new Date().toLocaleTimeString()}</span>
        </p>
        <p className={`chat_massage ${true && `chat_receiver`}` }>
          <span className='chat_name'>jayesh</span>
        hello what is your name
          <span className='timestamp'>{new Date().toLocaleTimeString()}</span>
        
        </p>
        <p className='chat_massage'>
          <span className='chat_name'>jayesh</span>
          <span className='timestamp'>{new Date().toLocaleTimeString()}</span>
        </p>
      </div>
      <div className='actualchat_lower'>
        <InsertEmoticon />
        <form>
          <input
          value={input}
          onChange={e=>e.target.value}
          placeholder="type a massage" type="text" />
          <button type="submit" onClick={sendmassage}>Send a message</button>

        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Actualchat
