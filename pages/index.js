import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Landingpage() {
  return (
    <main
      className={`bg-[url('/bg/pexels-yuuilina-10254480.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-end pb-0`}
    >
      <section className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center gap-y-16 px-10 py-10">
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/2 h-auto place-self-center"
        />
        <div className="w-full h-max flex flex-col items-center justify-center  !gap-y-4 text-center">
          <span className="text-black font-medium text-base text-center w-full">
            The best diary ordering and delivery app of the century.
          </span>
          <Link
            href={"/auth-choice"}
            className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full"
          >
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
}
