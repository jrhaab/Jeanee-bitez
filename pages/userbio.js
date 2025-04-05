import { Heading, Paragraph, Section } from "@/components/globals/Elements/typography";
import {Button} from "@/components/globals/Elements/buttons";
import {InputInstance} from "@/components/globals/Elements/inputs";
import { Content, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Userbio() {
  return (
    
    < main
      className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover shadow-lg bg-center flex flex-col gap-6 px-3 pb-0`}>
    
      < Heading content={" Fill in your bio"}/> 
      <Paragraph content={"The data will be displayed in your account profile for security"}/> 
      <Section className="w-full h-max rounded-t-[var(--radius-md)] bg-white flex flex-col opacity-95 py-8">
      <form action="fill-in" className="w-full h-max  flex flex-col px-3 ">
        <label for="username" className="text-1xl font-semibold">Full Name:</label> 
       <InputInstance type={"text"} className={'${customClass} w-full '} onChange={"someFunction"}/>
        
        <label for="password" className="text-1xl font-semibold">Phone number:</label> 
        <InputInstance type={"text"} className={'${customClass} w-full '} onChange={"someFunction"}/>
        
      
        <label for="password" className="text-1xl font-semibold">Gender:</label> 
        <InputInstance type={"text"} className={'${customClass} w-full '} onChange={"someFunction"}/>
      
        <label for="password" className="text-1xl font-semibold">Address:</label> 
        <InputInstance type={"text"} className={'${customClass} w-full '} onChange={"someFunction"}/>
      </form> 
      <Button type="submit" content={"Next"}/>
      </Section>
      
     
     
        
      </main>
  );
}
