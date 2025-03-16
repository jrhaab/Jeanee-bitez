import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Addprofilephoto() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-6 px-3 pb-0`} >
             
             
              <span>Upload your profile photo</span> 
              <span className="font-medium text-base text-center w-full">This data will be displayed in your profile for security</span>

              <section className="w-full h-80 rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center shadow-lg px-3 gap-8">
                
                <button className="bg-slate-100 rounded-3xl h-20  text-black w-full ">
                    <span>take photo</span></button>
                <button className="bg-slate-100 rounded-3xl h-20 w-full  text-black "><span>From gallery</span></button> 
               
                </section>
                <button type="button" className="bg-red-800 justify-center  rounded-3xl text-white font-bold shadow-lg flex items-center h-10 w-full"> Next</button>
             
        </main>
    )
}