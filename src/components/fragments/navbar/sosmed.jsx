import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


const Sosmed = () => {
  return (
    <div className="lg:flex gap-2 hidden">
      <a href="https://twitter.com/404imam"><FaXTwitter size={24} /></a>
      <a href="https://www.instagram.com/0ximam"><IoLogoInstagram size={24} /></a>
    </div>
  )
}

export default Sosmed;