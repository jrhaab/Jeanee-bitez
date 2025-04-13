import Image from "next/image";
import { LinkInstance } from "@/components/globals/Elements/links";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Authchoice() {
  return (
    <MainInstance>
      <SectionInstance>
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/3 h-auto"
        />
        <ParagraphInstance
          content={"Login or Sign Up to get the most out of Jeanee."}
        />
        <div className="flex flex-col justify-center items-center py-10 gap-4 w-full">
          <LinkInstance
            href={"./signup"}
            label={"Sign up"}
            text={"white"}
            customclassName={"rounded-full"}
          />
          <LinkInstance
            href={"./login"}
            label={"Login"}
            customclassName={"rounded-full"}
          />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
