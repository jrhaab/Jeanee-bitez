import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Editprofilephoto() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-6 px-3 pb-0`} >
             
             
              <span>Upload your profile photo</span> 
              <span className="font-medium text-base text-center w-full">This data will be displayed in your profile for security

              </span>

              
             
              <section className="w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center shadow-lg justify-center px-3 py-8">
                
                <button className="bg-slate-100 rounded-full h-40 w-40 ">
                    </button>
                
               
                </section>
                <button type="button" className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center w-full px-3 py-3 "> Next</button>
             
        </main>
    )
}