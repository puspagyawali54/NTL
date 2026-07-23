import { products } from "../constants/Products"

function Products() {



  
  return (
    <div className="">
      <div className='pt-16 '>
        <h1 className='text-center  p-4 font-bold text-4xl text-gray-600'>Product List </h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-2 border-none p-4 m-3'>
          {
            products.map((prod)=> (
              
              <div className='border-2 border-amber-50 p-6 -m-2 rounded-sm text-center bg-white transition duration-300 ease-in-out hover:scale-105 
              hover:shadow-xl hover:bg-gray-100 cursor-pointer' 
              key={prod.id}>
                <img src={ prod.Image} alt={prod.title} className=' w-full h-40 object-cover rounded mb-3 '/>

                <div>
                  <h2 className='font-bold text-lg mb-2'>{prod.title }</h2>
                  <p className='text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed text-left'>{prod.desc}</p>
                </div>

              </div>


            ))

          
          }


        </div>
      </div>
    </div>
  )
}

export default Products 