import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  return (
    <main
    className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center items-center justify-center flex flex-col gap-8 pb-0`}
    >
      <section className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col gap-8  ">
 <Image
               src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
               alt=""
               width={1024}
               height={1024}
               className="w-1/2 h-auto place-self-center"
             />
      <span className="text-black font-bold text-2xl text-center ">Sign up for free</span>
      <form action="fill-in" className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col gap-5  px-3">
       <div className="items-start justify-start w-full">
       <label for="email-address" className="text-1xl font-semibold ">Email:</label> 
        <input
          type="text"
          
          className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"
        />
       </div> 
       <div className="items-start justify-start w-full">
       <label for="password" className="text-1xl font-semibold">Password:</label> 
        <input
          type="text"
          
          className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35 "
        />
       </div>
      
       
        
        
         
        <span className="text-1xl font-semibold "> Remind me</span>
        
        <button
          type="submit"
          className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full"
        >
          Sign up
        </button>
        
        <div className="flex items-center justify-center">
        <span
         className="text-[var(--secondary-red-color)]">Forgot the password?</span>
        </div>
       
        
        <span className="flex justify-center text-1xl font-normal">or continue with</span>
        <div className="flex items-center justify-center">
        <button className=" bg-slate-300  rounded-md text-black text-1xl font-semibold opacity-35 h-14 w-60">
          Google
        </button>
        </div>
      
        <span className="flex justify-center text-1xl font-normal">Already have an account? <span className="text-red-800">Login</span> </span>
      </form> 
    
      
      </section>
    
    </main>
  );
}


//gap-y-16 px-10//