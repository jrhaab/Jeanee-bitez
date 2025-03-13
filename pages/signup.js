import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  return (
    <main
    className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center items-center justify-center flex flex-col  pb-0`}
    >
      <section className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col   ">
 <Image
               src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
               alt=""
               width={1024}
               height={1024}
               className="w-1/2 h-auto place-self-center"
             />
      <span className="text-black font-bold text-2xl text-center ">Sign up for free</span>
      <form action="fill-in" className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center">
       <div className="items-start justify-start w-full">
       <label for="email-address" className="text-2xl font-bold ">Email:</label> 
        <input
          type="text"
          
          className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full "
        />
       </div> <br />
       <div className="items-start justify-start w-full">
       <label for="password" className="text-2xl font-bold">Password:</label> 
        <input
          type="text"
          
          className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full "
        />
       </div>
      
       
        
        
         
        <span className="text-1xl font-bold "> Remind me</span>
        <br /> 
        <button
          type="submit"
          className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full"
        >
          Sign up
        </button>
        <br />
        <span className="flex justify-center text-1xl font-normal">forgot password?</span><br />
        <span className="flex justify-center text-1xl font-normal">or continue with</span>
        <button className=" bg-slate-300 justify-center rounded-md text-black text-2xl font-bold flex items-center  h-14 w-60">
          Google
        </button> <br />
        <span className="flex justify-center text-1xl font-normal">Already have an account? <span className="text-red-800">Sign in</span> </span>
      </form> 
    
      
      </section>
    
    </main>
  );
}


//gap-y-16 px-10 py-10//