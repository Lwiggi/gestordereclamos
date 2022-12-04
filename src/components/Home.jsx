import React from 'react';
import { Link } from 'react-router-dom';



/**
 * 
 */
const Home = () => {
    return (<div>
                <h1 className="text-cyan-800 text-3xl text-center md:w-2/3 mx-auto">
                        GESTOR DE RECLAMOS - TICKETERA {''}
                        </h1>
                    
                    <p className="text-cyan-800 mt-10  text-md text-center md:w-2/3 mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </p>
                    <br></br>
                    <p className="text-cyan-800 mt-10  text-md text-center md:w-2/3 mx-auto">
                    Si desea ingresar un reclamo <Link to ='/nvotkt'>
                       <span className="font-bold text-cyan-600"> click aquí </span>
                        </Link>
                    </p>
            </div>);
}



export default Home;