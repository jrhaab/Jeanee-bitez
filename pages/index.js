import { LinkInstance } from "@/components/globals/Elements/links";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";

export default function Landingpage() {
  return (
    <MainInstance
      bg={"bg-[url('/bg/pexels-yuuilina-10254480.jpg')]"}
      customclassName={"justify-end items-end "}
    >
      <SectionInstance
        customclassName={
          "rounded-t-[var(--radius-md)] items-end justify-end gap-y-16 px-10 py-9 h-max"
        }
      >
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/3 h-auto"
        />
        <div className="w-full h-max flex flex-col items-center justify-center  !gap-y-4 text-center">
          <ParagraphInstance
            content={"The best diary ordering and delivery app of the century."}
          />
          <LinkInstance
            href={"/auth-choice"}
            text={"white font-semibold"}
            label={"Get started"}
            customclassName={"rounded-full"}
          />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
