function Carrosel() {
    return (
       
           
       
         <div className="bg-black carousel-container overflow-hidden relative">
            <div className="carousel-inner flex transition-transform duration-300">
               
                <div className="carousel-item flex-none w-full">
                    <img src="velozes.jpg" alt="Imagem 1" className="w-full" />
                </div>
                <div className="carousel-item flex-none w-full">
                    <img src="velozes.jpg" alt="Imagem 2" className="w-full" />
                </div>
                <div className="carousel-item flex-none w-full">
                    <img src="velozes.jpg" alt="Imagem 3" className="" />
                </div>
            </div>
 
       
            <button className="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2">Prev</button>
            <button className="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2">Next</button>
        </div>
    );
       
     
 
}
export default Carrosel;