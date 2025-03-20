import { MdLocalCafe } from "react-icons/md"; // Material Design icons
import { Inter } from "next/font/google";
import { Button, Heading, Paragraph, Section } from "@/components/globals/Elements/typography";

const inter = Inter({ subsets: ["latin"] });

export default function Passwordrest() {
    return(
        <main  className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-6 px-3 pb-0`} >
       
            <Heading type={"h3"} content={"Forgot password"}/>
            <Paragraph content={"Select the suitable option to reset your password"}/>
        <Section>
        <div className="flex flex-col gap-10  h-max w-full">
             
            <button className=" bg-slate-50 rounded-[var(--radius-2xl)] h-max w-full  "> 
                <MdLocalCafe className="text-brown-600 animate-bounce" />
                <div className="flex flex-col text-1xl font-bold"><small className="flex items-start justify-items-start  ml-8">Via SMS:</small> 
                <small className="flex items-start justify-items-start  ml-8">+233*****37</small></div></button>

            <button className=" bg-slate-50 rounded-[var(--radius-2xl)] h-max w-full ">
                <MdLocalCafe className="text-brown-600 animate-bounce"/>
                <div className="flex flex-col text-1xl font-bold"> <small className="flex items-start justify-items-start  ml-8"> Via email:</small> 
                <small className="flex items-start justify-items-start  ml-8">em******@gmail.com</small></div></button>

       
            </div>
            <Button type="submit" content={"Next"}/>
        </Section>
           
        
        </main>
    )

}