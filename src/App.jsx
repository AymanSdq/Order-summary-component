
import './App.css'

function App() {



  return (
    <>
        <main className='relative w-full h-screen flex justify-center items-center bg-paleBlue'>
          <img className='absolute top-0 left-0 right-0 w-full max-sm:hidden' src="/pattern-background-desktop.svg" alt="Bakcground" />
          <section className='z-10 w-[350px] pb-4 gap-5 flex flex-col justify-center items-center bg-white rounded-xl'>
            
            <img className='rounded-t-xl' src="/illustration-hero.svg " alt="Image music" />
            
            <div className='px-8 flex flex-col gap-3 justify-center items-center'>
              
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

                <button className='shadow-sm  shadow-brightBlue mt-5 mb-2 text-center w-full text-white font-bold bg-brightBlue  rounded-lg py-2'>Proceed to Payment</button>
                <a className='mb-4 font-bold text-desaturatedBlue hover:text-darkBlue' href="#">Cancel Order</a>
            
            </div>
          
          </section>

        </main>
    </>
  )
}

export default App
