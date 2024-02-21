"use client"

import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';

export default function Login() {
    

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            console.log(token)

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setToken(token)
        }

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        redirect('/')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Home</h1>

            {!token ?
            <h3>Test</h3>

            : <button onClick={logout}>Logout</button>}

        </main>
        
    )
}