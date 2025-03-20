import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Paragraph } from "@/components/globals/Elements/typography";

const inter = Inter({ subsets: ["latin"] });

export default function Authchoice() {
  return (
    <main
      className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-end pb-0`}
    >
      
      <section className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center gap-y-16 px-10 py-10">
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/2 h-auto place-self-center"
        /> 
        <Paragraph content={"Login or Sign Up to get the most out of Jeanee."} />
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">
          <Button type={"submit"} content={"Sign up"} ></Button>
          <button className="bg-[var(--primary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full">
            Login
          </button>
        </div>
      </section>
    </main>
  );
}
