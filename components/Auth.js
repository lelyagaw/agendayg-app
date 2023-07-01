import { supabase } from '@/utils/supabaseClient'
import { Button, Container,Grid,TextField } from '@mui/material'
import { useState } from 'react'


export default function Auth() {

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const handleLogin = async () => {
        try{
            setLoading(true)
            const {error} = supabase.auth.signInWithOtp({email})
            if (error) throw error
            alert('Check your email for the login link!')

        }catch(error){
            alert(error.error_description || error.message)
            
        } finally{
            setLoading(false)
        }
    }

  return (
    <Container>
        <h1 >Login or signup</h1>
        <p>Signin cia magic link with your email</p><br></br>
        <Grid container flex rowSpacing={1}>
            <Grid item md={12}>
                <p>{email}</p>
                <TextField id="outlined-basic" label="me@mail.com" variant="outlined"
                 onChange={(e)=> setEmail(e.target.value)}/>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" color="primary" 
                onClick={() => handleLogin()}>Send the Magic Link</Button>

            </Grid>

        </Grid>



    </Container>
  )
}
