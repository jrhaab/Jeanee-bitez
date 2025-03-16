import { Inter } from "next/font/google";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center  flex flex-col  pb-0  px-3 w-full h-max gap-6`}
    >
       
        <div className="flex flex-row justify-start items-center gap-2 w-full">
   <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={40} height={40} />
   <span className="w-full font-bold "> Hello!, Emmanuel   </span>
   <button id="notification-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
  <button id="favorite-button">  <FaHamburger className="text-red-500 animate-bounce" /></button>
   </div>
    <div className="flex flex-row w-full items-start justify-between gap-5"> 
        <input type="text" placeholder="search" className="bg-slate-50 shadow-lg rounded-full w-full"/>
        <button id="filter-button">< FaHamburger className="text-red-500 animate-bounce" /></button> </div>

    <div className="w-full h-32 bg-slate-100 shadow-lg rounded-md"></div>
    <span>Popular purchases</span>
    <section className="w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-row items-center justify-center shadow-lg px-3 py-4 gap-4">
    <button className="w-full h-20 bg-slate-100 rounded-md"></button>
    <button className="w-full h-20 bg-slate-100 rounded-md"> </button>
    <button className="w-full h-20 bg-slate-100 rounded-md"></button></section>



<section className="w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center shadow-lg px-3 py-4 gap-4">

<div className="w-full h-20 bg-slate-100 rounded-md justify-start items-center flex flex-row ">
    <MdLocalCafe className="text-brown-600 animate-bounce " />
       <div className=" flex flex-col"><small className="flex items-start justify-items-start  ml-8"> Strawberry</small>
       <small className="flex items-start justify-items-start  ml-8">10 cedis</small></div>
    </div>


    <div className="w-full h-20 bg-slate-100 rounded-md justify-start  items-center flex flex-row ">
    <MdLocalCafe className="text-brown-600 animate-bounce "/>
       <div className=" flex flex-col"><small className="flex items-start justify-items-start  ml-8"> Strawberry</small>
       <small className="flex items-start justify-items-start  ml-8">10 cedis</small></div>
    </div>

   <div className="w-full h-20 bg-slate-100 rounded-md justify-start items-center flex flex-row ">
    <MdLocalCafe className="text-brown-600 animate-bounce " />
       <div className=" flex flex-col"><small className="flex items-start justify-items-start  ml-8"> Strawberry</small>
       <small className="flex items-start justify-items-start  ml-8">10 cedis</small></div>
    </div>

</section>
   


    
    </main>
  );
}