import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    return ( 
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col  pb-0`} >
             <Image src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
               alt=""
               width={1024}
               height={1024}
               className="w-1/2 h-auto place-self-center"/>
              <span className="text-black font-bold text-2xl text-center w-full">Login to your account</span> <br />
              <form className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col shadow-lg px-3">

                <label for ="email-address" className="text-1xl font-semibold">Email:</label> 
                
                
                <input type="text" className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35" /> 

                <br />
                <label for ="email-address" className="text-1xl font-semibold ">Password:</label>
                <button>
                <input type="text"  className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"/>
                </button> 
                <span className="text-1xl font-semibold"> Remind me</span>
                 <br />
                <button type="submit" className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full" >Login</button> <br />
                
                <div className="flex justify-center items-center">
              <Link  href={"/passwordreset"} className="text-[var(--secondary-red-color)]">Forgot the password?</Link>
              </div>
              
                
              </form>
              <br />
              <div>
              <span>Don't have an account? </span>
              <Link href={"/signup"} className=" text-red-800">Sign up</Link> 
              </div>
               
              
                
             
        </main>
    )
}