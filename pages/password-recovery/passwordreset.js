import { MdLocalCafe } from "react-icons/md"; // Material Design icons
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Passwordrest() {
    return(
        <main  className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-6  pb-0`} >
       
            <h1 className="text-2xl font-bold">Forgot password?</h1> 
            <span className="text-1xl font-thin">Select the suitable option to reset your password</span>
        <section className="w-full h-max rounded-t-[var(--radius-md)] bg-slate-200 opacity-95 flex flex-col  ">
        <div className="flex flex-col gap-10  h-max w-full">
             
            <button className=" bg-slate-50 rounded-[var(--radius-2xl)] h-max w-full  "> 
                <MdLocalCafe className="text-brown-600 animate-bounce" />
                <div className="flex flex-col text-2xl font-bold"><small className="flex items-start justify-items-start  ml-8">Via SMS:</small> 
                <small className="flex items-start justify-items-start  ml-8">+233*****37</small></div></button>

            <button className=" bg-slate-50 rounded-[var(--radius-2xl)] h-max w-full ">
                <MdLocalCafe className="text-brown-600 animate-bounce" />
                <div className="flex flex-col text-2xl font-bold"> <small className="flex items-start justify-items-start  ml-8"> Via email:</small> 
                <small className="flex items-start justify-items-start  ml-8">em******@gmail.com</small></div></button>

       
            </div>
        </section>
           
            <button className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full">Next</button> 
        </main>
    )

}