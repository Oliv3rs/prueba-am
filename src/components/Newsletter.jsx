import { useState,useEffect }  from 'react';
import axios from 'axios';
import  '../assets/css/newsletter.css';
import LoadingSkeleton from "./LoadingSkeleton";

function Newsletter(){
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true); //state for loading
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array for number of loading skeleton

    useEffect(() => {
        let timerId;
        if(loading){
            timerId = setTimeout(async () => { 
                await
                axios.get(
                    "https://fakerapi.it/api/v1/books?_quantity=6"
                  )
                  .then((response) =>{
                    let res = response.data.data;
                    setNotas(res);
                    setLoading(false);
                  });
             },1000);
            }
            return () => clearTimeout(timerId);
        }, [loading]);
	
      //console.log(notas);

    return(
        <>
        <section className="pt-10 lg:pt-[40px] pb-1">
        <div className="container">
            <div className="flex flex-wrap -mx-4">
            {loading && <LoadingSkeleton/>}

            {!loading &&
            notas.map((nota) => (
                <div key={nota.id} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div key={nota.id} className="overflow-hidden mb-2">
                <img key={nota.title}
                    src="https://placeimg.com/500/200/any"
                    alt="image"
                    className="w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    />
                <div className="p-2 sm:p-2 md:p-3 xl:p-5 text-center">
                    <h3>
                    <a href="#" className="font-semibold text-dark text-xl  sm:text-[22px] md:text-xl lg:text-[22px]
                            xl:text-xl 2xl:text-[22px] mb-2 block hover:text-primary text-left dark:text-white text-center" >
                        {nota.title }
                        </a>                            
                    </h3>
                </div>
                </div>
            </div>
            )) 
            }
                
        
      </div>
   </div>
</section>
          
        </>
    )
}

export default Newsletter