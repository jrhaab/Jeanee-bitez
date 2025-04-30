import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Paywith() {
  return (
    <MainInstance>
      <SectionInstance>
        <HeadingInstance content={"Make Payment"} />
        <ParagraphInstance content={"Pay with"} />
        <div className="border border-amber-700"></div>
        Mobile Money
        <div>My Card</div>
        <ButtonInstance content={"Cancel"} />
      </SectionInstance>
    </MainInstance>
  );
}
