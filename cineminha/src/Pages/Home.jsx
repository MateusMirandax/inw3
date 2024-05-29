import data from "../../artigos.json"

function Home() {
    console.log(data)
    return ( 
        <main className="bg-white">
        <div className="flex justify-center">
                 <input className=" w-80 h-12 rounded-lg border-solid border-2 border-purple-600 mt-10" type="text" name="busca" id="busca" placeholder="Digite aqui sua busca" />
            </div>
            <div className="grid grid-cols-3 gap-4">

            {data.map(
                    filme => (
                     <div className="card mx-5 gap-3" key={filme.title}>
                           <h1 className="bg-white text-black flex justify-center border-solid border-2 border-purple-600 rounded-lg mt-5 ">{filme.title}</h1>

                           {filme.image ?
                           <img className="w-40 flex justify-center items-center m-10 rounded-lg mb-15 mt-10 " src={filme.image} alt={filme.title} />:
                           "Não tem imagem"}

                           <div className="text bg-white rounded-lg text-black border-purple-600 border-2 p-10 mb-7">
                               {filme.text.map(text => (
                                <span key={text}> {text}</span>
                               ))}
                           </div>

                           <div className="tag bg-white rounded-lg text-black flex justify-center border-pink-700 border-2 mt-4" >
                               {filme.tags.map(tag => (
                                <span key={tag}> {tag}</span>
                               ))}
                           </div>
                       
                           </div>
                      
                 
                )
                )
                }
                
          
            </div>
           
               
        </main>
     );
}
export default Home;