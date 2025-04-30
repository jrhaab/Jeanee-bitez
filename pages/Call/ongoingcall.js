import { LinkInstance } from "@/components/globals/Elements/links";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";
export default function Ongoingcall() {
  return (
    <MainInstance>
      <SectionInstance customclassName={"flex flex-col items-center justify-center"}>
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/3 h-auto"
        />
        <div>
          <ParagraphInstance content={"Name:"} />
          <ParagraphInstance content={"02:35mins"} />
        </div>

        
          <LinkInstance label={"cancel"} />
        
      </SectionInstance>
    </MainInstance>
  );
}
