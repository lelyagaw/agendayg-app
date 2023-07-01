import { use, useEffect, useState } from 'react'
import '@/styles/globals.css'
import Auth from '@/components/Auth'
import { supabase } from '@/utils/supabaseClient';
import { Container } from '@mui/material';
import Header from '@/components/Header';

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true;

    async function getInitialSession() {
      const { data:{ session} } = await supabase.auth.getSession()  

      if (mounted) {
        if (session) {
          setSession(session)
        }
      }

      setLoading(false);
    }

    getInitialSession();

    const {subscription} = supabase.auth.onAuthStateChange( (_event, session) => {
      setSession(session)
    })

    return () => {
      mounted = false
      subscription?.unsubcribe()
    }

  }, [])
 
  return (
    <>
      {!session ?
        (<Auth />) : 
        (<Container >
          <Header session={session}/>
          <Component {...pageProps} />
          </Container>)
      }
    </>
  )

}

