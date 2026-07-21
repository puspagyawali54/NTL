

function Contact() {
  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-10'>

      <form className="w-full max-w-md border-2 border-gray-200 
      space-y-4 rounded-2xl p-6 md:p-10 flex flex-col bg-white shadow-lg">

        <h1 className='font-bold text-2xl md:text-3xl text-center text-gray-600'>
          Contact Form
        </h1>

        <label>Name:</label>
        <input 
          type="text" 
          placeholder='Enter your full name' 
          className='w-full p-2 border  border-gray-400 rounded-md'
        />

        <label>Email:</label>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className='w-full p-2 border  border-gray-400 rounded-md'
        />

        <label>Subject:</label>
        <input 
          type="text" 
          placeholder="Subject" 
          className='w-full p-2 border  border-gray-400 rounded-md'
        />

        <label>Message:</label>
        <textarea 
          rows={4} 
          placeholder='Enter your message' 
          className='w-full p-2 border  border-gray-400 rounded-md'
        />

        <button 
          className='w-full p-2 bg-blue-800 rounded-md font-bold text-white 
          hover:bg-gray-600 cursor:pointer transition border  border-gray-400 duration-300'>
          Send Message
        </button>

      </form>

    </div>
  )
}

export default Contact