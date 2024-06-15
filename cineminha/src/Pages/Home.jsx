import data from '../../artigos.json'

function Home() {
    return ( 
        <>
        <main>
            <div className="grid grid-cols-3 gap-4 mt-1 bg-black ">
            {data.map((filme,index) =>(
                <div className='card mx-5 gap-3' key={index}>
                    <h1 className='text-xl font-medium mb-4 text-white'>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title} className='w-80'/>

                    <div className='tag flex space-x-10 mt-2 mb-4'>
                        {filme.tags.map(tag => (
                            <span key={tag} className='text-white'>{tag}</span>
                        ))}
                    </div>

                    <div className='text text-white mb-7 text-justify max-w-80'>
                        {filme.text.map(text => (
                            <span key={text} className='colorTxt'>{text}</span>
                        ))}
                    </div>
                </div>
                ))}
            </div>
            </main>
        </>
     );
}
export default Home;

