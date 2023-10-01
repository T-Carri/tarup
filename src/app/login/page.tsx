
import { Indie_Flower } from 'next/font/google'
 
const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  

})
export default function Home(){



    return(


 

        <main className="h-screen">
        <div className="mx-auto max-w-full py-3 sm:px-4 lg:px-6 grid grid-cols-3 grid-rows-2 gap-4 lg:gap-6 h-full">
          <div className="hidden lg:block lg:col-span-2 lg:row-span-2 rounded-lg">
            
              <img className='rounded-lg w-screen h-4/5 opacity-80' src="/welcome.jpg" alt="welcome" />
            
            <h4 className='m-5 mt-6 '>© 2023 tarup. Todos los derechos reservados.</h4>
          </div>
          <div className="col-span-3 row-span-3 lg:col-span-1 lg:row-span-1 rounded-lg bg-gray-200"></div>
        </div>
      </main>
      
      
      
      


    )
}