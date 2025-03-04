import { Inter } from "next/font/google";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

const inter = Inter({ subsets: ["latin"] });

export default function Maplocation() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <span>Set location</span>
      <small className="">
        This data will be displayed in your profile for 
        security
      </small>

      <div className="flex items-center justify-center h-52 w-52 rounded-2xl bg-slate-100 ">
        <Image
          src={
            "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
          }
          alt=""
          width={100}
          height={100}
        />
      </div>
      <br />
      <button className="bg-slate-300 rounded-2xl h-20 w-52  ">
        <MdLocalCafe className="text-brown-600 animate-bounce" />
        <small className="flex items-start justify-items-start  ml-8">
          
          location
        </small>
        <small className="flex items-start justify-items-start  ml-8">
          UG - Legon Street LG25
        </small>
        <FaHamburger className="text-red-500 animate-bounce" />
      </button>

      <br />

      <button type="button" className="bg-red-800 justify-center  rounded-3xl text-white flex items-center h-10 w-52 ">Set location</button>
    </main>
  );
}
