"use client"
import QRCode from "react-qr-code";


export default function Home() {

  const CLIENT_ID = "def5593434d54362a4d996e391f1c641"
  const REDIRECT_URI = "http://192.168.2.164:3000/home"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <QRCode value={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}></QRCode>
    </main>
   
  )
}
