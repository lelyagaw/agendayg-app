import { Avatar } from '@mui/material'
import React from 'react'

export default function Header({session}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '12px' }}>
        <div>
            Coach App
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '12px' }}>
            <Avatar sx={{ bgcolor: 'lightblue' }}>{session.user.email[0]}</Avatar>
        </div>
    </div>

  )
}
