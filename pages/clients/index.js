import { Button } from '@mui/material'
import React from 'react'
import {useRouter} from 'next/router'

export default function Clients() {
  const Router = useRouter();
  return (
    <div>
      <header style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <h1>List of Clients</h1>
        <Button onClick={() => Router.push('clients/new')} variant="contained" color="primary">Add Client</Button>
      </header>
    </div>
  )
}
