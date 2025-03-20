import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Heading, InputInstance, Paragraph, Section } from "@/components/globals/Elements/typography";

const inter = Inter({ subsets: ["latin"] });

export default function Newpassword() {
    return(
        <main  className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center  flex flex-col  pb-0  px-3  h-max gap-6`}>
            <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} /> 
            <Heading type={"h3"} content={"Rest Password"} />
            < Paragraph content={" create a new password"}/> 
            <Section>
            <section className=" w-full h-max rounded-[var(--radius-md)] bg-white  flex flex-col items-start shadow-lg justify-center px-3 gap-3 py-3">
                <label htmlFor="newpassword"> New Password:</label>
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"}/>
            
            <label htmlFor="newpassword"> Confirm Password:</label>
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"}/>
            <span className="font-bold justify-start items-start">Remind me </span>
            </section>
           
            
             <Button type="submit" content={"Next"}/> <br/>
            <button className="bg-slate-300 rounded-[var(--radius-full)] w-full h-10">Cancel</button>
            </Section>
            

        </main>
    )

}