import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const changeInputHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value});
        setErrorMessage('');
        setIsSuccess(false);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if(userData.password !== userData.password2) {
            setIsSuccess(false);
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            await axios.post('http://localhost:3000/auth/register',
        {
            name: userData.name,
            email: userData.email,
            password: userData.password
        },
            config
        );

        setIsSuccess(true);
        setErrorMessage('Registration succesfull');
        setTimeout(() => {
            navigate('/login');
        }, 4000);

        } catch (error) {
            setIsSuccess(false);
            setErrorMessage(error.response.data.msg || 'An error occurred');

        }
    };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-200">
    <div className="flex flex-col items-center bg-yellow-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">KAYIT OL</h2>

        {errorMessage && (
            <p className={`$ {isSuccess ? 'text-green-500' : 'text-red-500'} text-lg italic mb-4`}>
                {errorMessage}
            </p>
        )}

        <form className="w-full" onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Adınız" 
                name="name" 
                value={userData.name} 
                onChange={changeInputHandler} 
                className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input 
                type="text" 
                placeholder="Email" 
                name="email" 
                value={userData.email} 
                onChange={changeInputHandler} 
                className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input 
                type="password" 
                placeholder="Şifre" 
                name="password" 
                value={userData.password} 
                onChange={changeInputHandler} 
                className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input 
                type="password" 
                placeholder="Şifre Doğrulama" 
                name="confirmPassword" 
                value={userData.confirmPassword} 
                onChange={changeInputHandler} 
                className="mb-6 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded w-full">
                Kayıt ol
            </button>
        </form>

        <p className="mt-6 text-black">Hesabın var mı?</p>
        <Link to="/login" className="text-blue-500 hover:text-blue-800 text-lg">Giriş yap</Link>
    </div>
</div>
  )
}

export default Register