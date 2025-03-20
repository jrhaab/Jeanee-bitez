import { Button, Heading, InputInstance, Section } from "@/components/globals/Elements/typography";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  return (
    <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center items-center justify-center flex flex-col gap-8 pb-0`}>
      
    <Image
               src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
               alt=""
               width={1024}
               height={1024}
               className="w-1/2 h-auto place-self-center"
             />
    <Heading type={"h3"} content={"sign up for free"}/>    
    <Section>
    <form action="fill-in" className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col gap-5  px-3">

       <div className="items-start justify-start w-full">
       <label for="email-address" className="text-1xl font-semibold ">Phone number:</label> 
        <InputInstance type={"text"} className={'${customClass} w-full '}  onChange={"someFunction"}/>
       </div> 

       <div className="items-start justify-start w-full">
       <label for="password" className="text-1xl font-semibold">Password:</label> 
       <InputInstance type={"text"} className={'${customClass} w-full '} onChange={"someFunction"}/>
       </div>
      
       
        
        
         
        <span className="text-1xl font-semibold "> Remind me</span>
        
       <Button type="submit" content={"Sign up"}/>
        
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
    
      
      </Section>
    
    </main>
  );
}


//gap-y-16 px-10//
