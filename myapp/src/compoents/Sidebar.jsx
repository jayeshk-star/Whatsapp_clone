import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import Chat from './Chat'

const Sidebar = () => {
  return (
    <div className='left_siderbar'>
      <div className='siderbar_top'>
        <Avatar />
        <div className='sidebar_topRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='silderbar_middle'>
        <div className='search'>
          <SearchOutlined />
          <input placeholder='Search or start  chart' type='text' />
        </div>
      </div>

      <div className='siderbar_bottom'>
        <Chat numberadd />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  )
}

export default Sidebar
