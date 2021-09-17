import './Actualchat.css'
import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { AttachFile, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'

const Actualchat = () => {
  const [img, setimg] = useState('')

  useEffect(() => {
    setimg(Math.floor(Math.random() * 5000))
  })
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
      <div className='actalchat_middle'></div>
      <div className='actualchat_lower'></div>
    </div>
  )
}

export default Actualchat
