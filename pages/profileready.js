import { Button, Heading, Paragraph } from "@/components/globals/Elements/typography";
import { Inter } from "next/font/google";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons

const inter = Inter({ subsets: ["latin"] });

export default function Profilecomplete() {
  return (
    <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-6 px-3 pb-0`}>
        <section className="w-full h-80 rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center px-3 gap-8 shadow-lg"> 
        <FaHamburger className="text-red-500 animate-bounce" />
      <Heading type={"h3"} content={"Congrats!"}/>
      <Paragraph content={"Your profile is ready for use"}/></section>
     

      <Button type="submit" content={"Next"}/>
    </main>
  );
}
