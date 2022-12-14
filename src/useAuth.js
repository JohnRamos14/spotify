import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,}).then(res => {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
                console.log(res.data)
           
                // this is to get rid of the code in the url and just show localhost:3000
                window.history.pushState({}, null, '/')
            }).catch((err)=>{
                // window.location = '/'
                console.log(err)
            })
    }, [code])


// this is to refresh the token so that user doesn't have to log in again after 1 hour
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
                refreshToken,}).then(res => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                    console.log(res.data)
                    // this is to get rid of the code in the url and just show localhost:3000
                    window.history.pushState({}, null, '/')
                }).catch(()=>{
                    window.location = '/'
                })
        }, (expiresIn - 60) * 1000)
// this is to clear the timeout so that it doesn't keep refreshing the token
      return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken;
}
