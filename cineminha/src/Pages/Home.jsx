import data from '../../artigos.json'

function Home() {
  console.log(data)
    return (
        <>
        <input className='w-60 h-10 p-5 rounded-lg m-5' type="text" name="busca" id="busca" placeholder='Digite aqui sua busca'/>
         <div className='grid grid-cols-3'>

           {data.map(filme => (
              <div className='card' key={filme.title}>
                <h1>{filme.title}</h1>
                <img src={filme.image} alt={filme.title}/>
                <div className=' bg-yellow-300 '>
                 {filme.tags.map(tag =>(
                  <span key={tag}className='text-black'> {tag}</span>
                 ))}
              </div>
              <div className='text'>
                 {filme.text.map(texto =>(
                  <p key={texto}> {texto}</p>
                 ))}
              </div>
          </div>

            ))
          }
          </div>
      </>
    );
}

export default Home ;
{/* <div className='card'>
    <h1>Titulo do filme</h1>
    <img src='/'></img>
    <div className='tag'>
        <span>Tags</span>
    </div>
    <p>texto do post</p>
</div> */}