import { Inter } from "next/font/google";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <div className="flex flex-col items-center justify-between gap-6">
        <div className="flex flex-row justify-center items-center gap-5 w-52">
   <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={40} height={40} />
   <span className=""> <b>Hello!, Emmanuel </b>  </span>
   <button id="notification-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
  <button id="favorite-button">  <FaHamburger className="text-red-500 animate-bounce" /></button>
   </div>
    <div className="flex flex-row items-start justify-between gap-5"> 
        <input type="text" placeholder="search" className="bg-slate-300 rounded-sm"/>
        <button id="filter-button">< FaHamburger className="text-red-500 animate-bounce" /></button> </div>

    <div className="w-52 h-20 bg-slate-300 rounded-md"></div>

    <div className="w-52 h-20 bg-slate-300 rounded-md"></div>

        </div>
        <div className=" h-10 bg-slate-300 rounded-md flex flex-row  justify-center items-center gap-5 w-52 ">
        <button id="favorite-button"> Home</button>
        <button id="cart-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
        <button id="chart-button">  <FaHamburger className="text-red-500 animate-bounce" /></button>
        <button id="profile-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
        
        </div>
   
     

    </main>
  );
}