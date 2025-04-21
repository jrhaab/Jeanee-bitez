import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Chocolateflavour() {
  return (
    <MainInstance>
      <SectionInstance>
        <ParagraphInstance content={"Hello"}/>
      </SectionInstance>
    </MainInstance>
  );
}
