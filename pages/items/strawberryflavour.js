import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";
export default function Strawberryflavor() {
  return (
    <MainInstance customclassName={"justify-end items-end"}  >
        
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

        <div className="flex flex-row w-full ">
          <ParagraphInstance content={"Strawberry Flavor"} />
          <ParagraphInstance content={"GHC 10.00"} />
        </div>
      <ParagraphInstance content={"Details"}/>

        <div className="flex flex-row w-full gap-2">
          <InputInstance customclassName={"w-20 rounded-md"} />
          <ButtonInstance customClass={" rounded-md "} content={"Add To Cart"}/>
        </div>
      </SectionInstance>
        
     
    </MainInstance>
  );
}
