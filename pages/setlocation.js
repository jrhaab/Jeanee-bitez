import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Setlocation() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-6 px-3 pb-0`} >
             
             
              <span className="">Set location</span> 
              <span className="font-medium text-base text-center w-full">This data will be displayed in your profile for security

              </span>
              <section className="w-full h-80 rounded-t-[var(--radius-md)] shadow-lg bg-white opacity-95 flex flex-col items-center justify-center px-3 gap-8">
                <button className="bg-slate-100 rounded-2xl h-20 w-full">
                <span>set location </span></button> <br />
                </section>
               
                
                <button type="button" className="bg-red-800 justify-center  rounded-3xl text-white font-bold flex items-center h-10 w-full "> Next</button>
             
        </main>
    )
}