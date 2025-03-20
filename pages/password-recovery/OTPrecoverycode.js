import { Inter } from "next/font/google";
import { Button, Heading, InputInstance, Paragraph, Section } from "@/components/globals/Elements/typography";

const inter = Inter({ subsets: ["latin"] });

export default function OTPcode() {
    return(
        <main  className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-12 px-3 py-10  pb-0`}> 
            
            <Heading type={"h3"} content={"Forgot password "}/>
            <Paragraph content={"Enter 4-digits PIN code we sent to your number +233****001"}/> 
            <Section> 
            <div className="h-max w-full flex flex-row items-center justify-center gap-6 ">
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"}/>
            <InputInstance type={"text"}className={'${customClass }w-full'} onChange={"someFunction"}/> 
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"} /> 
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"} /> 
            </div>
            <Paragraph content={"Resend code in 56 s"}/>
            <Button type="submit" content={"Submit"}/> 
            </Section>

            
       
        </main>
    )

}