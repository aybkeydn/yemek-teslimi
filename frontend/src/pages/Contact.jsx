import React from 'react'
import restaurant from "../assets/restaurant1.jpg";

const Contact = () => {
    return (
        <div className="max-w-[1400px] mx-auto mt-16 p-4">

        <div className="shadow-lg rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="max-auto">
                    <h2 className="text-2xl font-bold mb-4">İletişime geçin!</h2>

                    <p className="text-lg mb-2">
                        <span className="font-semibold">Email: </span>
                        aybuke.aydin@example.com
                    </p>

                    <p className="text-lg mb-2">
                        <span className="font-semibold">Phone: </span>
                        +90 555 123 4545
                    </p>

                    <p className="text-lg mb-2">
                        <span className="font-semibold">İsim: </span>
                        Aybüke Aydın
                    </p>
                </div>

                <div className="mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Adres</h2>
                    <p className="text-lg mb-2">456 Izmir mh. Pasalar sk. no:419</p>
                    <p className="text-lg mb-2">34500 Istanbul/Maslak</p>
                    <p className="text-lg">Turkiye</p>
                </div>
            </div>

            <img src={restaurant} alt="restaurant" className="rounded-2xl w-full object-cover mt-8" />

        </div>
    </div>
  
    )
}

export default Contact