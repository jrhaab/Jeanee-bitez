import { Button, Heading, InputInstance, Paragraph, Section } from "@/components/globals/Elements/typography";
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
              <Heading type={"h3"} content={"Login to your account"}/> 
              <Section>
              <form className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col shadow-lg px-3 py-6">

<label for ="email-address" className="text-1xl font-semibold">Email:</label> 
<InputInstance type={"text"} className={'${customClass} w-full '} onChange={"someFunction"}/><br/>

<label for ="email-address" className="text-1xl font-semibold ">Password:</label>
<InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"}/><br/>

<span className="text-1xl font-semibold"> Remind me</span>
 <br />
<Button type="submit" content={"Login"}/> 
<br />

<Link  href={"/passwordreset"} className="text-[var(--secondary-red-color)]">Forgot the password?</Link>



</form>


<div className="flex flex-row ">
<Paragraph content={"Don't have an account?"}/>
<Link href={"/signup"} className=" text-red-800 w-full">Sign up</Link> 
</div>

</Section>
             
               
              
                
             
        </main>
    )
}