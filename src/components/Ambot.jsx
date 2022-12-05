import { motion } from "framer-motion";

const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring"
      }
    }
  };

function Ambot() {
	return (
		<div className="flex h-auto w-full items-center justify-center rounded-md bg-gradient-to-r from-amGreen-dark to-amGreen px-4 py-4">
			<motion.div
						variants={fadeInContainerWithStagger}
						initial="hidden"
						animate="visible"
						>
				<motion.div variants={fadeInUp}>
					<div className="flex h-full w-9/12 items-center justify-center">
						<p className="m-0 text-white">
							Bienvenido (a) a ambot, aquí tienes disponible una guía y atención de salud
							y bienestar emocional las 24h.{" "}
						</p>
					</div>
				</motion.div>
			</motion.div>
			<div className="flex w-3/12 items-center justify-center">
			<motion.button className='rounded-md border-none bg-white font-bold text-amBlack outline-none'
				 whileHover={{ scale: 1.1 }}
				 whileTap={{ scale: 0.9 }}
				 >
				<button
					type="button"
					className="btn-acceder hover:border-transparent focus: border-transparent outline-transparent"	>
					Acceder
				</button>
				</motion.button>
			</div>
		</div>
	);
}

export default Ambot;
