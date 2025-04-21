import Image from "next/image";
import { LinkInstance } from "@/components/globals/Elements/links";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Authchoice() {
  return (
    <MainInstance customclassName={"justify-end items-end"}>
      <SectionInstance
        customclassName={
          "rounded-t-[var(--radius-md)]  gap-y-8 px-10 py-9 h-max  "
        }
      >
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/3 h-auto"
        />
        <ParagraphInstance content={"Sign Up to get the most out of Jeanee."} />

        <div className="flex w-full flex-col justify-center items-center gap-y-2">
          <LinkInstance
            href={"/login"}
            label={"Login"}
            text={"white"}
            customclassName={"rounded-full font-bold text-[var(--primary-red-color)] w-2/3 border border-red-700"}
            bg={"white "}
          />

          <LinkInstance
            href={"/signup"}
            label={"Sign up"}
            text={"white"}
            customclassName={"rounded-full w-2/3"}
          />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
