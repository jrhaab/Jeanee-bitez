import { Button, Heading, Paragraph, Section } from "@/components/globals/Elements/typography";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Paymentmethod() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col  w-full gap-6 px-3 pb-0`} >
             <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} />
             
              <Heading type={"h3"} content={"Payment Method"}/> 
              
              <Paragraph content={"* This data will be displayed in your profile for security"} />

              <Section>
              <div className="flex flex-col items-center justify-center w-full  py-10 ">
                
                <button className="bg-slate-50 items-center justify-center rounded-2xl h-12 w-full text-[var(--secondary-red-color)]  "> Telecel </button> <br />
                <button className="bg-slate-50 items-center justify-center rounded-2xl h-12 w-full text-[var(--secondary-red-color)]  "> AirtelTigo </button> <br />
                <button className="bg-slate-50 items-center justify-center rounded-2xl h-12 w-full  text-[var(--secondary-red-color)] "> MTN </button> <br />
                </div>
                <Button type="submit" content={"Next"}/>
                </Section> 
             

                

               

        </main>
    )
}