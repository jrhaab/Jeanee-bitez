import { Inter } from "next/font/google";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

const inter = Inter({ subsets: ["latin"] });

export default function Maplocation() {
  return (
    <main
      className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-6 px-3 pb-0`}>
      <span>Set location</span>
      <span className="font-medium text-base text-center w-full">
        This data will be displayed in your profile for 
        security
      </span> 
<section className="w-full h-96 rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center px-3 shadow-lg gap-8">
<div className="flex items-center justify-center h-52 w-full rounded-2xl bg-slate-100 ">
        <Image
          src={
            "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
          }
          alt=""
          width={100}
          height={100}
        />
      </div>
    
      <button className="bg-slate-100 rounded-2xl h-20 w-full ">
        <MdLocalCafe className="text-brown-600 animate-bounce" />
        <small className="flex items-start justify-items-start  ml-8"> location
        </small>
        <small className="flex items-start justify-items-start  ml-8">UG - Legon Street LG25
        </small>
        <FaHamburger className="text-red-500 animate-bounce" />
      </button>

</section>
     
     

      <button type="button" className="bg-red-800 justify-center  rounded-3xl text-white font-bold flex items-center h-10 w-full ">Set location</button>
    </main>
  );
}
