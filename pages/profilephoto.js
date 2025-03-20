import { Button, Heading, Paragraph, Section } from "@/components/globals/Elements/typography";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Addprofilephoto() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-6 px-3 pb-0`} >
             
             
            <Heading type={"h3"} content={"Upload your profile photo"} />
              <Paragraph content={"This data will be displayed in your profile for security"}/>

              <Section>
                
                <button className="bg-slate-100 rounded-3xl h-20  text-black w-full ">
                    <span>take photo</span></button>
                <button className="bg-slate-100 rounded-3xl h-20 w-full  text-black "><span>From gallery</span></button> 
                <Button type="submit" content={"Next"}/>
                </Section>
                
             
        </main>
    )
}