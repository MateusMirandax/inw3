import data from '../../artigos.json'

function Home() {
console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca" />
            <div className='grid grid-cols-3 gap-4'>
           
            {data.map(filme => (
                <div className='card' key={filme.title}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title} />
                    <div className='tag'>
                        {filme.tags.map(tag => (
                             <span key={tag} className='text-pink-400'>{tag}</span>
                
                        ))}
                       
                    </div>
                </div>
            ))}
            
            </div>
        </main>
     );
}
export default Home;


{/* <div className='card'>
    <h1>Titulo do filme</h1>
    <img src='/'></img>
    <div className='tag'>
        <span>Tags</span>
    </div>
    <p>texto do post</p>
</div> */}