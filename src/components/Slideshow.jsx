import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
	{
		description:
			"Aeroméxico se unió a SkyTeam en el año 2000, convirtiéndose en uno de los miembros fundadores de esta gran alianza.",
		group: "Grupo Aeroméxico",
		url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		title: "¿Sabías qué?"
	},
	{
		description:
			"Nunc quisque fermentum efficitur purus pulvinar in porttitor potenti rhoncus",
		group: "Grupo Aeroméxico",
		url: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		title: "Iaculis dapibus taciti ac"
	},
	{
		description:
			"Nunc quisque fermentum efficitur purus pulvinar in porttitor potenti rhoncus",
		group: "Grupo Aeroméxico",
		url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		title: "Auctor quam ridiculus"
	}
];

function Slideshow() {
	const swiperConfig = {
		slidesPerView: 1,
		onSlideChange: (e) => slideChange(e)
	};

	const slideChange = (data) => {
		//console.log("Slide change");
		//console.log(data);
	};

	return (
		<section className="relative z-10 h-[530px] w-screen">
			<Swiper
				effect="fade"
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				modules={[Pagination, EffectFade, Autoplay]}
				spaceBetween={0}
				{...swiperConfig}
				loop
				className="relative h-full w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide
						key={slide.title}
						className="relative z-20 flex h-full w-full items-center justify-center">
						<div className="container z-10 ml-16 flex flex-col items-start justify-center text-white" >
							<h3 className="text-sm font-bold">{slide.group}</h3>
							<h1 className="mt-2 max-w-lg text-5xl font-bold">{slide.title}</h1>
							<h2 className="mt-4 max-w-lg text-lg">{slide.description}</h2>
							<div>
							<button
								type="button"
								className="mt-4 flex items-center justify-center rounded-full border-white bg-white/10 outline-none backdrop-blur-lg hover:border-white hover:bg-white/20"
							>
								Conoce más
								<ArrowSmallRightIcon className="ml-3 h-4 w-4" />
							</button>
							</div>
						</div>						
						<div className="image-holder-container absolute left-0 top-0 z-0 h-full w-full">
							<span className="top-gradient absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-r from-amBlue to-transparent" />
							<img
								src={slide.url}
								alt={slide.title}
								className="h-full w-full object-cover"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Slideshow;
