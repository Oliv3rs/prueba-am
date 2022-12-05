import { useState,useEffect }  from 'react';
import axios from "axios";
import { motion } from "framer-motion";


function WelcomeUser() {
	const [nombre , setNombre] = useState(null);
	const [foto, setFoto] = useState(null);

	useEffect(() => {
		let usuarioData = "";
		axios.get(
			"https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01"
		  )
		  .then((response) =>{
			let res = response.data.data;
			let nombre = res[0].firstname+ ' ' + res[0].lastname
			setNombre(nombre);
			setFoto(res[0].image);
		  });
		
		
	 },[]);
	
	return (
		
		<div className="-mt-[75px] flex h-[150px] w-full items-center justify-center space-x-6 rounded-md bg-white shadow-lg">
			<img className="h-20 w-20 rounded-full" src={foto} alt="foto"/>
			<div className="flex flex-col">
				<p className="text-xl font-semibold text-amBlue">Bienvenido (A),{nombre}!</p>
				<motion.button className='text-amBlue-ligh mt-1 rounded-full border-none bg-blue-400 px-0 py-1 text-xs outline-none transition-colors duration-200 ease-in-out hover:bg-blue-500'
				 whileHover={{ scale: 1.1 }}
				 whileTap={{ scale: 0.9 }}
				 >
					<div>
					<button
					type="button"
					className=""
				>
					Mi Experiencia AM
				</button>
					</div>
				</motion.button>
			</div>
		</div>
	);
}

export default WelcomeUser;
