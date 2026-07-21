

function About() {
  return (
       <secion className=' bg-center text-center w-2xl ml-7 items-center justify-center pt-10 m-25' >


    
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        
      
        <div className="md:w-1/2">
          <img
            src="luxury.png"
            alt="mattress"
            className="w-full h-100 object-cover rounded-xl shadow-lg"
          />
        </div>

      
        <div className="md:w-1/2 space-y-5">
          
          <h1 className="text-4xl font-bold text-gray-600">
            About Us
          </h1>

          <p className="text-gray-600 text-lg">
            Welcome to Nepal Trade Link Pvt. Ltd. We are an official dealer of 
            high-quality Nepali made mattresses based in Butwal, Nepal.
          </p>

          <p className="text-gray-600 text-lg">
            Our mission is to provide comfortable, durable, and affordable 
            sleeping solutions. We believe good sleep is essential for a 
            healthy life and we are committed to delivering maximum comfort.
          </p>

          <p className="text-gray-600 text-lg">
            We proudly promote Nepali products and support local industries. 
            Our focus is on customer satisfaction, quality, and long-term trust.
            
          </p>

        </div>
      </div>

    </div>
    </secion>
  );
}

export default About;