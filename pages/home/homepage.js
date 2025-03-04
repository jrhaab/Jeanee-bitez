import { Inter } from "next/font/google";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  justify-between p-24 ${inter.className}`}
    >
        <div className="flex flex-col items-center justify-between max-h-screen  gap-4">
        <div className="flex flex-row justify-between items-center gap-2 w-64">
   <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={40} height={40} />
   <span className=""> <b>Hello!, Emmanuel </b>  </span>
   <button id="notification-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
  <button id="favorite-button">  <FaHamburger className="text-red-500 animate-bounce" /></button>
   </div>
    <div className="flex flex-row w-64 items-start justify-between gap-5"> 
        <input type="text" placeholder="search" className="bg-slate-300 rounded-sm"/>
        <button id="filter-button">< FaHamburger className="text-red-500 animate-bounce" /></button> </div>

    <div className="w-64 h-32 bg-slate-300 rounded-md"></div>
    <span>Popular purchases</span>
<div className="flex flex-row gap-3">
<div className="w-20 h-20 bg-slate-300 rounded-md">
</div>
    <div className="w-20 h-20 bg-slate-300 rounded-md">

    </div>
    <div className="w-20 h-20 bg-slate-300 rounded-md"></div>
</div>
<div className="flex flex-col gap-3 mb-4">
<div className="w-64 h-20 bg-slate-300 rounded-md justify-center items-center flex flex-row ">
  
        <MdLocalCafe className="text-brown-600 animate-bounce " />
       <div className=" flex flex-col">
       <small className="flex items-start justify-items-start  ml-8">
          
          location
        </small>
        <small className="flex items-start justify-items-start  ml-8">
          UG - Legon Street LG25
        </small>
       </div>
      
        
      </div>
    <div className="w-64 h-20 bg-slate-300 rounded-md justify-center items-center flex flex-row ">
      
    <MdLocalCafe className="text-brown-600 animate-bounce " />
       <div className=" flex flex-col">
       <small className="flex items-start justify-items-start  ml-8">
          
          location
        </small>
        <small className="flex items-start justify-items-start  ml-8">
          UG - Legon Street LG25
        </small>
       </div>
    </div>
    <div className="w-64 h-20 bg-slate-300 rounded-md justify-center items-center flex flex-row ">
      
    <MdLocalCafe className="text-brown-600 animate-bounce " />
       <div className=" flex flex-col">
       <small className="flex items-start justify-items-start  ml-8">
          
          location
        </small>
        <small className="flex items-start justify-items-start  ml-8">
          UG - Legon Street LG25
        </small>
       </div>
    </div>
</div>
   

</div>
    
    </main>
  );
}