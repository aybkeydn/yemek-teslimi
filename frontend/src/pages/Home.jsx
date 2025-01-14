import React, { useEffect, useState } from 'react';
import axios from "axios";
import logo from "../assets/yemek.png";
import restaurant from "../assets/seoul-south-korea-gyeongbokgung-palace-korea.jpg";
import FoodCard from '../components/FoodCard';

const Home = () => {

    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/food')
            .then((response) => {
                setFood(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, []);

  return (
    <div className='p-4 max-w-[1400px] mx-auto mt-16'>

<div className='flex justify-center mt-4'>
    <img src={restaurant} className='w-[800px] max-w-full h-auto object-cover' alt="Restaurant" />
</div>




        <div className="bg-[#ecb9da] flex items-center justify-center h-[50px]">
          <h1 className="text-black text-xl font-bold">YEMEKLER</h1>
        </div>




        <FoodCard food={food} />
    </div>
  )
}

export default Home