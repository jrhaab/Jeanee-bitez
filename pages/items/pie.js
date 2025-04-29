import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";
export default function Meatpie() {
  return (
    <MainInstance customclassName={"justify-end items-end"}>
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
        <div className="flex flex-row w-full">
          <ParagraphInstance content={"Meat Pie"} />
          <ParagraphInstance content={"GHC 6.00"} />
        </div>
        <ParagraphInstance content={"Details"} />
        <div className="flex flex-row w-full">
          <InputInstance customclassName={"rounded-md  "} />
          <ButtonInstance customClass={"w-full rounded-md"} />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
