
import { FaFacebook, FaInstagram,FaGoogle, FaPhone } from "react-icons/fa"

function Footer() {
  return (
    <div className="bg-gray-500 text-white text-center p-5 mt-10">
      <h2 className="text-lg font-bold">Nepa Trade Link.Pvt.Ltd</h2>
      <p>© 2026 All Rights Reserved</p>

      <div className="flex justify-center gap-5 mt-3">
        <a href="https://www.facebook.com/" className="hover:text-gray-400">
        <FaFacebook/>
        </a>
        <a href="#" className="hover:text-gray-400"><FaGoogle/>

        </a>
        <a href="#" className="hover:text-gray-400"><FaInstagram/>
         </a>
        <a href="contact" className="hover:text-gray-400"><FaPhone/>
         </a>
      </div>
    </div>
  )
}

export default Footer