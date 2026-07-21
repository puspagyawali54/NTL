
// import { useState } from "react"
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
// import { NavLink } from "react-router-dom"
// import { FaSearch } from "react-icons/fa"


// function Navbar() {
//   const [open, setOpen] = useState(false)
// const [search, setSearch] = useState("")

//   const navLinks = [
    
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name:"products", path:"/products"},
//     { name: "Contact", path: "/contact" },
    
    
//   ]

//   return (
//     <nav className= ' text-white bg-blue-800'>
//       <div className='flex justify-between items-center px-5 py-2 font-bold'>
        
//         <NavLink to="/" className="flex items-center gap-4">
//           <img src="/logo.webp" className='h-10'/>
        
//         </NavLink>

//         <button 
//           onClick={() => setOpen(!open)} 
//           className='text-xl md:hidden'
//         >
//           {open ? <HiOutlineX/> : <HiOutlineMenu/>}
//         </button>

//         {/* Desktop Menu */}
//         <ul className=' space-y-6 hidden md:flex gap-6 '>
//           {navLinks.map((link, index) => (
//             <li key={index} className='hover:scale-105 transition duration-30'>
//               <NavLink to={link.path}>{link.name}</NavLink>
//             </li>
//           ))}
//         </ul>

//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className='md:hidden space-y-4 p-4'>
//           {navLinks.map((link, index) => (
//             <li key={index} className='hover:scale-105 transition duration-300'>
//               <NavLink to={link.path}>{link.name}</NavLink>
//             </li>
//           ))}
//         </ul>
//       )}

//     </nav>
//   )
// }

// export default Navbar






import { useState } from "react"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

function Navbar() {

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching:", search)
  }

  return (
    <nav className='text-white bg-blue-800'>

      <div className='flex justify-between items-center px-5 py-2 font-bold'>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-4">
          <img src="/logo.webp" className='h-10'/>
        </NavLink>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* for Search */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            className="px-3 py-1 text-gray-500 outline-none"
          />
          <button className="bg-blue-600 px-3 py-2">
            <FaSearch />
          </button>
        </form>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className='text-xl md:hidden'
        >
          {open ? <HiOutlineX/> : <HiOutlineMenu/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className='md:hidden space-y-4 p-4'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex mt-4 bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
              className="px-3 py-2 text-gray-500 w-full outline-none"
            />
            <button className="bg-blue-600 px-3">
              <FaSearch />
            </button>
          </form>

        </ul>
      )}

    </nav>
  )
}

export default Navbar