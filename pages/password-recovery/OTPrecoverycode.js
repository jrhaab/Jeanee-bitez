import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OTPcode() {
    return(
        <main  className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-12 px-3 py-10  pb-0`}> 
            <section className="w-full h-max bg-white opacity-95 flex flex-col rounded-[var(--radius-md)] justify-center items-center shadow-lg py-8 gap-8">
            <h3 className="text-1xl font-bold">Forgot password</h3> 
            <span className="font-medium text-base text-center w-full">Enter 4-digits PIN code we sent to your number +233****001</span> 
            <div className="h-max w-full flex flex-row items-center justify-center gap-6 ">
            <input type="text" placeholder="1"className="bg-slate-300 rounded-2xl h-10 w-10 " /> 
            <input type="text" placeholder="2"className="bg-slate-300 rounded-2xl h-10 w-10 " /> 
            <input type="text" placeholder="3"className="bg-slate-300 rounded-2xl h-10 w-10" /> 
            <input type="text" placeholder="4"className="bg-slate-300 rounded-2xl h-10 w-10 " /> 
            </div>
            <span>Resend code in 56 s</span>
            </section>
           

            <button type="button" className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full"> Submit</button>
       
        </main>
    )

}