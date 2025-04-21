import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";

export default function Vanillaflavour() {
  return (
    <MainInstance customclassName={"pb-0 py-96"}>
      <SectionInstance customclassName={"items-end justify-end gap-12 py-5 rounded-t-[var(--radius-md)]"}>

        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/3 h-auto"
        />
        <div className="flex flex-row w-full">
          <ParagraphInstance content={"Vanilla flavour"} />
          <ParagraphInstance content={"GHC 10.00"} />
        </div>
        <ParagraphInstance content={"Details"} />
        <div className="flex flex-row w-full gap-2 px-3">
          <InputInstance customclassName={"w-20 rounded-md"} />
          <ButtonInstance customClass={"rounded-md"} content={"Add To Cart"} />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
