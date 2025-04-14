import Image from "next/image";
import { LinkInstance } from "@/components/globals/Elements/links";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Authchoice() {
  return (
    <MainInstance customclassName={"pb-0 py-96"}>
      <SectionInstance
       customclassName={
        "rounded-t-[var(--radius-md)] items-end justify-end gap-y-16 px-10 py-9  "
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

        <LinkInstance
          href={"./signup"}
          label={"Sign up"}
          text={"white"}
          customclassName={"rounded-full"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
