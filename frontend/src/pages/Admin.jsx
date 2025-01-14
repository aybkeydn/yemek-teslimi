import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


const Admin = () => {
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
        })
   
    })

    return (
        <div className='bg-gradient-to-r from-yellow-200 to-pink-200 px-10 py-16 max-w-4xl mx-auto mt-16 rounded-lg shadow-lg'>

  <div className='text-center mb-10'>
   
  </div>

  <Link to='/admin/food/create' className='flex items-center gap-2 bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-full font-medium shadow-md mb-10'>
    <span className='text-2xl font-bold'>+</span> yeni ürün ekle
  </Link>

  <div className='bg-yellow-300 p-10 rounded-lg'>
    <table className='w-full text-left'>
      <thead className='bg-yellow-100 uppercase text-lg font-bold'>
        <tr>
          <th scope="col" className='py-4 px-6'>yemek adı</th>
          <th scope="col" className='py-4 px-6'>fiyat</th>
          <th scope="col" className='py-4 px-6'></th>
        </tr>
      </thead>
      <tbody>
        {food.map((foodItem, index) => (
          <tr key={foodItem._id} className='border-b border-yellow-500'>
            <td className='py-4 px-6 text-gray-700 font-medium'>{foodItem.name}</td>
            <td className='py-4 px-6 text-gray-700 font-medium'>{foodItem.priceInCents} TL</td>
            <td className='py-4 px-6'>
              <div className='flex gap-x-2'>
                <Link to={`/admin/food/edit/${foodItem._id}`} className='bg-orange-300 hover:bg-orange-400 text-white py-2 px-6 font-medium rounded-lg shadow-md'>düzenle</Link>
                <Link to={`/admin/food/delete/${foodItem._id}`} className='bg-orange-300 hover:bg-orange-400 text-white py-2 px-6 font-medium rounded-lg shadow-md'>sil</Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>


   )
}

export default Admin 