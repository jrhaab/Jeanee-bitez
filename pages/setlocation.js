import { Button, Heading, Paragraph, Section } from "@/components/globals/Elements/typography";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Setlocation() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col w-full gap-6 px-3 pb-0`} >
             
             
              <Heading type={"h3"} content={"Set location"}/> 
              <Paragraph content ={"This data will be displayed in your profile for security"}/>
              <Section >
                <div className="bg-slate-100 rounded-2xl h-20 w-full">
                <Paragraph content={"set location"}/></div> 
                <Button type="submit" content={"Next"}/>
                </Section>
               
                
                
             
        </main>
    )
}