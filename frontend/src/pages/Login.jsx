import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const changeInputHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value});
        if(errorMessage) setErrorMessage('');
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:3000/auth/login', loginData);
            console.log(response.data);

            localStorage.setItem('token', response.data.token);

            navigate('/admin');
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.msg);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-200">
    <div className="flex flex-col items-center bg-yellow-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">GIRIŞ YAP</h2>

        {errorMessage && (
            <p className={`$ {isSuccess ? 'text-green-500' : 'text-red-500'} text-lg italic mb-4`}>
                {errorMessage}
            </p>
        )}

        <form className="w-full" onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Email" 
                name="email" 
                value={loginData.email} 
                onChange={changeInputHandler} 
                className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input 
                type="password" 
                placeholder="Şifre" 
                name="password" 
                value={loginData.password} 
                onChange={changeInputHandler} 
                className="mb-6 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded w-full">
                Giriş yap
            </button>
        </form>

        <p className="mt-6 text-black">Hesabın yok mu?</p>
        <Link to="/register" className="text-blue-500 hover:text-blue-800 text-lg">Kayıt ol</Link>
    </div>
</div>
  )
}

export default Login