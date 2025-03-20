import { Button, Heading, Paragraph, Section } from "@/components/globals/Elements/typography";
import { Inter } from "next/font/google";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons

const inter = Inter({ subsets: ["latin"] });

export default function Resetsuccessful() {
  return (
    <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-6 px-3 pb-0`}>
        <Section >
      <FaHamburger className="text-red-500 animate-bounce" />
      <Heading type={"h3"} content={"Congrats!"}/>
      <Paragraph content={"Reset successful"}/>
      <Button type="submit" content={"OK"}/> 
        </Section>

       
    </main>
  );
}
