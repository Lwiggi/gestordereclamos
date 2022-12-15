import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Contacto() {

    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cyan-100">
        
            <div className="container mx-auto my-4 px-4 lg:px-10">
                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex justify-center">
                        <h1 className="text-cyan-900 font-bold uppercase text-3xl">CONTACTENOS</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input className="w-full bg-cyan-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Nombres/s*" />
                        <input className="w-full bg-cyan-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Apellido/s*" />
                        <input className="w-full bg-cyan-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" />
                        <input className="w-full bg-cyan-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Telefono*" />
                </div>
                    <div className="my-4">
                        <textarea placeholder="Mensaje*" className="w-full h-32 bg-cyan-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <div className='w-full'></div>
                         <button 
        type="button"
        className="py-2 px-10 bg-cyan-600 hover:bg-cyan-800 text-white font-bold uppercase rounded-lg"
        onClick={()=> {navigate("/")}}
        >Enviar mensaje</button>
                    </div>
                </div>
            </div>
    </div> 
  );
}
