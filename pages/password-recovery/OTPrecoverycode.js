import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OTPcode() {
    return(
        <main  className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} `}> 
            
            <h3>Forgot password</h3> 
            <span>Enter 4-digits PIN code we sent to <br />your number +233****001</span> 
            <div className="w-60 flex flex-row items-center justify-center gap-6 mb-20">
            <input type="text" placeholder="1"className="bg-slate-300 rounded-2xl h-10 w-10 " /> 
            <input type="text" placeholder="2"className="bg-slate-300 rounded-2xl h-10 w-10 " /> 
            <input type="text" placeholder="3"className="bg-slate-300 rounded-2xl h-10 w-10" /> 
            <input type="text" placeholder="4"className="bg-slate-300 rounded-2xl h-10 w-10 " /> 
            </div>
            <span>Resend code in 56 s</span>

            <button type="button" className="bg-red-800 justify-center rounded-3xl text-white flex items-center h-10 w-60"> Submit</button>

            
           

        </main>
    )

}