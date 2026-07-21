import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className='text-gray-700 p-10 mt-2 mr-10'>
        <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 flex-col-reerse md:flex-row  item-center m-3 '>
            <div className='text-center p-4 max-w-2xl -mt-10'>
                <h1 className='font-bold text-2xl'>Nepal Tade  Link </h1>
                <h2>We are the authhorized dealer of Classic Mattress locaed in western of Nepal. 
                  you can visit us for more ..
                </h2>
                <p>we provide a high qualty off mattess that are avaibale in nepal.</p>

                <div className='flex justify-center m-4 p-3'>
                  <a href="/CV.pdf" download>
                  <button className='bg-blue-700 text-white p-4 m-5  rounded-b-sm font-bold hover:scale-105 transition duration-100 cursor-pointer'>
                    Download CV</button>
                    </a>


<Link to="/contact">
 <button className='bg-blue-700 p-4 m-4 text-white rounded-b-sm font-bold hover:scale-105 transition duration-100 cursor-pointer'>
                    Contact Us</button></Link>


                 
                </div>
            </div>
{/* <div>
  <img src="/nepal.jpg" alt="profile" className='ml-60 border-0 mt-0'/>
  </div> */}



        </div>

    </div> 

  
    
  )
}

export default Hero