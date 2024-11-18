import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function register(user) {

        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'sucess'
        console.log(user)
        try {
            const data = await api.post('/user/register', user).then((response) => {
                return response.data
            })

            await authUser(data)
        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'
        }
    }

    async function authUser(data){

        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))

        navigate(`/login`)
    }

    async function authUserLogin(data){

        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('userId', JSON.stringify(data.userId))

        navigate(`/`)
    }

    
    async function login(user, type){
        let msgText = 'Login realizado com sucesso!'
        let msgType = 'sucess'

        try {

            const data = await api.post('/user/login', user).then((response) => {
                return response.data
            })

            await authUserLogin(data)

        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'
        }
    }


    function logout(){
        let msgText = 'Logout realizado com sucesso!'
        let msgType = 'sucess'

        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/login')

    }

    return { authenticated, register, logout, login}


}