
import './App.css'

function App() {



  return (
    <>
        <main className='relative w-full h-screen flex justify-center items-center bg-paleBlue'>

          <section className='w-[450px] gap-5 flex flex-col justify-center items-center bg-white rounded-xl'>
            
            <img className='rounded--txl' src="/illustration-hero.svg " alt="Image music" />
            
            <div className='px-12 flex flex-col gap-3 justify-center items-center'>
              
              <h1 className=' text-darkBlue font-bold text-lg'>Order Summary</h1>
              
              <p className=' text-desaturatedBlue text-center'>You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!</p>
              
              <div className='w-full flex justify-between items-center rounded-lg bg-veryPaleBlue py-4 px-4'>

                <div className='flex justify-center items-center gap-4'>
                  <img className='w-10 h-10' src="/icon-music.svg" alt="Icon music" />
                  <div>
                    <p className='text-darkBlue font-bold'>Annual Plan</p>
                    <p className='text-desaturatedBlue'>$59.99/year</p>
                  </div>
                </div>
                
                <a className=' text-brightBlue font-semibold underline' href="/">Change</a>

              </div>

              
            
            </div>
          
          </section>

        </main>
    </>
  )
}

export default App
